export interface Medication {
  name: string;
  mechanismOfAction: string;
  sideEffects: string[];
  nursingTeachingPoints: string[];
}

export interface MedicationClass {
  className: string;
  description: string;
  medications: Medication[];
}

export interface AdverseSyndrome {
  name: string;
  description: string;
  symptoms: string[];
  nursingInterventions: string[];
  associatedMedications: string[];
}

export interface StudyGuideData {
  medicationClasses: MedicationClass[];
  adverseSyndromes: AdverseSyndrome[];
}
