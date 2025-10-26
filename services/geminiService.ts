import { GoogleGenAI, Type } from "@google/genai";
import type { StudyGuideData } from '../types';

const fetchMedicationData = async (): Promise<StudyGuideData> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
  }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    Generate a comprehensive psychiatric medication study guide as a single JSON object.

    Part 1: Medication Classes
    First, create a list of major psychiatric medication classes: SSRIs, SNRIs, TCAs, MAOIs, Typical Antipsychotics, Atypical Antipsychotics, and Mood Stabilizers.
    For each class:
    - Provide a brief, one-sentence description.
    - List common medications within that class (using generic and brand names, e.g., "Fluoxetine (Prozac)"). For the SSRIs class, provide at least 6 medications (e.g., Fluoxetine, Sertraline, Paroxetine, Citalopram, Escitalopram). For all other classes, provide 3-5 medications. Ensure you include "Lithium (Lithobid)" under Mood Stabilizers.
    For each medication:
    - Detail its specific mechanism of action.
    - List 4-6 common side effects.
    - List 3-5 essential nursing teaching points.

    Part 2: Adverse Syndromes
    Second, create a list of major adverse syndromes associated with these medications. Include Serotonin Syndrome, Neuroleptic Malignant Syndrome, Agranulocytosis, Hypertensive Crisis, Tardive Dyskinesia, Acute Dystonia, Akathisia, Pseudoparkinsonism, Lithium Toxicity, Anticholinergic Side Effects, and Metabolic Syndrome.
    For each syndrome:
    - Provide a concise description.
    - List 4-6 key symptoms.
    - List 3-5 critical nursing interventions.
    - Provide a list of associated medication names. CRITICAL: These names must exactly match the medication names generated in Part 1 (e.g., "Sertraline (Zoloft)", "Haloperidol (Haldol)").

    Specific Instructions for Syndromes:
    - For "Metabolic Syndrome", include features like weight gain, dyslipidemia, hyperglycemia, and increased risk for diabetes/cardiovascular disease. You MUST associate it with the medications under "Atypical Antipsychotics".
    - For "Anticholinergic Side Effects", include symptoms like dry mouth, blurred vision, constipation, urinary retention, and cognitive impairment. Include nursing interventions like monitoring for these symptoms and encouraging fluids. Associate this syndrome with TCAs and some antipsychotics.
    - For the drug-induced movement disorders (Tardive Dyskinesia, Acute Dystonia, Akathisia, Pseudoparkinsonism), you MUST associate them with the medications listed under "Typical Antipsychotics" and "Atypical Antipsychotics". This is a critical association.
    - "Lithium Toxicity" must be associated with "Lithium (Lithobid)".

    The final output must be a single, valid JSON object adhering to the provided schema.
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      medicationClasses: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            className: { type: Type.STRING },
            description: { type: Type.STRING },
            medications: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  mechanismOfAction: { type: Type.STRING },
                  sideEffects: { type: Type.ARRAY, items: { type: Type.STRING } },
                  nursingTeachingPoints: { type: Type.ARRAY, items: { type: Type.STRING } },
                },
                required: ["name", "mechanismOfAction", "sideEffects", "nursingTeachingPoints"],
              },
            },
          },
          required: ["className", "description", "medications"],
        },
      },
      adverseSyndromes: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            description: { type: Type.STRING },
            symptoms: { type: Type.ARRAY, items: { type: Type.STRING } },
            nursingInterventions: { type: Type.ARRAY, items: { type: Type.STRING } },
            associatedMedications: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: ["name", "description", "symptoms", "nursingInterventions", "associatedMedications"],
        },
      },
    },
    required: ["medicationClasses", "adverseSyndromes"],
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.2,
      },
    });

    const jsonText = response.text.trim();
    const data = JSON.parse(jsonText);
    return data as StudyGuideData;
  } catch (error) {
    console.error("Error fetching or parsing medication data:", error);
    throw new Error("Failed to retrieve data from the AI. Please check the API key and prompt.");
  }
};

export { fetchMedicationData };