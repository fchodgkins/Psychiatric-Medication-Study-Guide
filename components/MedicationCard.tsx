import React, { useState, useEffect, useRef } from 'react';
import type { Medication } from '../types';
import { BrainIcon, AlertTriangleIcon, GraduationCapIcon, ChevronDownIcon, BiohazardIcon } from './Icons';

interface MedicationCardProps {
  medication: Medication;
  isHighlighted: boolean;
  associatedSyndromes: string[];
  onSelectSyndrome: (syndromeName: string) => void;
}

const MedicationCard: React.FC<MedicationCardProps> = ({ medication, isHighlighted, associatedSyndromes, onSelectSyndrome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHighlighted) {
      setIsOpen(true);
      // Give a slight delay for the layout to adjust before scrolling
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [isHighlighted]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const highlightClass = isHighlighted
    ? 'ring-2 ring-indigo-500 dark:ring-indigo-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900'
    : 'shadow-md';

  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-slate-800 rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:shadow-xl ${highlightClass}`}
    >
      <button
        onClick={toggleOpen}
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{medication.name}</h3>
        <ChevronDownIcon className={`w-6 h-6 text-slate-500 dark:text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-2 space-y-6">
          <div>
            <h4 className="flex items-center text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">
              <BrainIcon className="w-5 h-5 mr-3 text-indigo-500" />
              Mechanism of Action
            </h4>
            <p className="text-slate-600 dark:text-slate-300 ml-8">{medication.mechanismOfAction}</p>
          </div>

          <div>
            <h4 className="flex items-center text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">
              <AlertTriangleIcon className="w-5 h-5 mr-3 text-amber-500" />
              Common Side Effects
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-8">
              {medication.sideEffects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="flex items-center text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">
              <GraduationCapIcon className="w-5 h-5 mr-3 text-emerald-500" />
              Nursing Teaching Points
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-8">
              {medication.nursingTeachingPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {associatedSyndromes.length > 0 && (
            <div>
              <h4 className="flex items-center text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">
                <BiohazardIcon className="w-5 h-5 mr-3 text-red-500" />
                Potential Adverse Syndromes
              </h4>
              <div className="flex flex-wrap gap-2 ml-8">
                {associatedSyndromes.map((syndromeName) => (
                  <button
                    key={syndromeName}
                    onClick={() => onSelectSyndrome(syndromeName)}
                    className="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium hover:bg-red-200 dark:hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-red-500 transition-colors"
                  >
                    {syndromeName}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicationCard;