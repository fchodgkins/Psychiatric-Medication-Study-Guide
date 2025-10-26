import React from 'react';
import type { MedicationClass, AdverseSyndrome } from '../types';
import MedicationCard from './MedicationCard';
import AdverseSyndromeCard from './AdverseSyndromeCard';

interface MainContentProps {
  selectedItem: MedicationClass | AdverseSyndrome | null;
  highlightedMedication: string | null;
  onSelectMedication: (medicationName: string) => void;
  adverseSyndromes: AdverseSyndrome[];
  onSelectItem: (name: string) => void;
}

function isMedicationClass(item: any): item is MedicationClass {
  return (item as MedicationClass)?.medications !== undefined;
}

const MainContent: React.FC<MainContentProps> = ({ selectedItem, highlightedMedication, onSelectMedication, adverseSyndromes, onSelectItem }) => {
  if (!selectedItem) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300">Welcome!</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">Select an item from the sidebar to begin your study session.</p>
        </div>
      </div>
    );
  }

  if (isMedicationClass(selectedItem)) {
    const findSyndromesForMed = (medName: string) => {
      return adverseSyndromes
        .filter(syndrome => syndrome.associatedMedications.includes(medName))
        .map(syndrome => syndrome.name);
    };
    
    return (
      <div>
        <div className="mb-8 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{selectedItem.className}</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{selectedItem.description}</p>
        </div>
        <div className="space-y-6">
          {selectedItem.medications.map(med => (
            <MedicationCard
              key={med.name}
              medication={med}
              isHighlighted={highlightedMedication === med.name}
              associatedSyndromes={findSyndromesForMed(med.name)}
              onSelectSyndrome={onSelectItem}
            />
          ))}
        </div>
      </div>
    );
  }

  return <AdverseSyndromeCard syndrome={selectedItem} onSelectMedication={onSelectMedication} />;
};

export default MainContent;