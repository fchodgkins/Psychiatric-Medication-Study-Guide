import React from 'react';
import { BiohazardIcon, WalkingIcon } from './Icons';

interface SidebarProps {
  medClasses: string[];
  syndromes: string[];
  selectedItemName: string;
  onSelectItem: (name: string) => void;
}

const movementDisorderNames = [
  'Tardive Dyskinesia',
  'Acute Dystonia',
  'Akathisia',
  'Pseudoparkinsonism'
];

const Sidebar: React.FC<SidebarProps> = ({ medClasses, syndromes, selectedItemName, onSelectItem }) => {
  const movementSyndromes = syndromes.filter(s => movementDisorderNames.includes(s));
  const otherSyndromes = syndromes.filter(s => !movementDisorderNames.includes(s));

  return (
    <aside className="w-64 bg-white dark:bg-slate-800/50 p-6 shadow-lg hidden md:block flex-shrink-0 overflow-y-auto">
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Med Classes</h2>
        <nav>
          <ul>
            {medClasses.map(className => (
              <li key={className} className="mb-2">
                <button
                  onClick={() => onSelectItem(className)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-indigo-500 ${
                    selectedItemName === className
                      ? 'bg-indigo-600 text-white font-semibold shadow-md'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {className}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {otherSyndromes.length > 0 && (
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700">
           <h2 className="flex items-center text-xl font-semibold text-slate-900 dark:text-white mb-6">
             <BiohazardIcon className="w-5 h-5 mr-3 text-red-500" />
             Adverse Syndromes
            </h2>
            <nav>
            <ul>
              {otherSyndromes.map(syndromeName => (
                <li key={syndromeName} className="mb-2">
                  <button
                    onClick={() => onSelectItem(syndromeName)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-red-500 ${
                      selectedItemName === syndromeName
                        ? 'bg-red-600 text-white font-semibold shadow-md'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {syndromeName}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {movementSyndromes.length > 0 && (
         <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700">
           <h2 className="flex items-center text-xl font-semibold text-slate-900 dark:text-white mb-6">
             <WalkingIcon className="w-5 h-5 mr-3 text-red-500" />
             Movement Disorders
            </h2>
            <nav>
            <ul>
              {movementSyndromes.map(syndromeName => (
                <li key={syndromeName} className="mb-2">
                  <button
                    onClick={() => onSelectItem(syndromeName)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-red-500 ${
                      selectedItemName === syndromeName
                        ? 'bg-red-600 text-white font-semibold shadow-md'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {syndromeName}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

    </aside>
  );
};

export default Sidebar;