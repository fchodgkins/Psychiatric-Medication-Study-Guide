import React, { useState, useEffect, useCallback } from 'react';
import type { MedicationClass, AdverseSyndrome, StudyGuideData } from './types';
import { fetchMedicationData } from './services/geminiService';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Spinner from './components/Spinner';

const App: React.FC = () => {
  const [studyData, setStudyData] = useState<StudyGuideData | null>(null);
  const [selectedItem, setSelectedItem] = useState<MedicationClass | AdverseSyndrome | null>(null);
  const [highlightedMedication, setHighlightedMedication] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadMedicationData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMedicationData();
      setStudyData(data);
      if (data.medicationClasses.length > 0) {
        setSelectedItem(data.medicationClasses[0]);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMedicationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectItem = (name: string) => {
    if (!studyData) return;
    const medClass = studyData.medicationClasses.find(c => c.className === name);
    if (medClass) {
      setSelectedItem(medClass);
      return;
    }
    const syndrome = studyData.adverseSyndromes.find(s => s.name === name);
    if (syndrome) {
      setSelectedItem(syndrome);
    }
  };

  const handleSelectMedication = (medicationName: string) => {
    if (!studyData) return;
    const targetClass = studyData.medicationClasses.find(mc =>
      mc.medications.some(med => med.name === medicationName)
    );
    if (targetClass) {
      setSelectedItem(targetClass);
      setHighlightedMedication(medicationName);
      setTimeout(() => setHighlightedMedication(null), 3500); // Clear highlight after 3.5s
    }
  };
  
  const getSelectedItemName = () => {
    if (!selectedItem) return '';
    if ('className' in selectedItem) return selectedItem.className;
    if ('name' in selectedItem) return selectedItem.name;
    return '';
  }

  return (
    <div className="flex h-screen font-sans bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <Sidebar
        medClasses={studyData?.medicationClasses.map(mc => mc.className) || []}
        syndromes={studyData?.adverseSyndromes.map(s => s.name) || []}
        selectedItemName={getSelectedItemName()}
        onSelectItem={handleSelectItem}
      />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Psychiatric Medication Study Guide</h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">An interactive AI-powered guide for students and professionals.</p>
        </header>

        {loading && (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <Spinner />
              <p className="mt-4 text-lg">Generating study guide with Gemini...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center h-full">
            <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg relative max-w-lg text-center" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline ml-2">{error}</span>
            </div>
          </div>
        )}

        {!loading && !error && studyData && (
          <MainContent
            selectedItem={selectedItem}
            onSelectMedication={handleSelectMedication}
            highlightedMedication={highlightedMedication}
            adverseSyndromes={studyData.adverseSyndromes}
            onSelectItem={handleSelectItem}
          />
        )}
      </main>
    </div>
  );
};

export default App;