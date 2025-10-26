import React from 'react';
import type { AdverseSyndrome } from '../types';
import { AlertTriangleIcon, FirstAidKitIcon, BrainIcon } from './Icons';

interface AdverseSyndromeCardProps {
  syndrome: AdverseSyndrome;
  onSelectMedication: (medicationName: string) => void;
}

const AdverseSyndromeCard: React.FC<AdverseSyndromeCardProps> = ({ syndrome, onSelectMedication }) => {
  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">{syndrome.name}</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{syndrome.description}</p>

      <div className="mt-8 space-y-6">
        <div>
            <h4 className="flex items-center text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">
                <AlertTriangleIcon className="w-5 h-5 mr-3 text-amber-500" />
                Key Symptoms
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-8">
                {syndrome.symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
                ))}
            </ul>
        </div>

        <div>
            <h4 className="flex items-center text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">
                <FirstAidKitIcon className="w-5 h-5 mr-3 text-emerald-500" />
                Nursing Interventions
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-8">
                {syndrome.nursingInterventions.map((intervention, index) => (
                <li key={index}>{intervention}</li>
                ))}
            </ul>
        </div>
        
        <div>
            <h4 className="flex items-center text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">
                <BrainIcon className="w-5 h-5 mr-3 text-indigo-500" />
                Associated Medications
            </h4>
            <div className="flex flex-wrap gap-2 ml-8">
              {syndrome.associatedMedications.map((medName) => (
                <button
                  key={medName}
                  onClick={() => onSelectMedication(medName)}
                  className="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-indigo-500 transition-colors"
                >
                  {medName}
                </button>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdverseSyndromeCard;
