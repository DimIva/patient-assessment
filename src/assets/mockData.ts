export interface IData {
  id: number;
  cognitiveStatus: string;
  applicableMeasures: string;
  patient: string;
}

export const mockData: IData[] = [
  { id: 1, cognitiveStatus: "COGNITION", applicableMeasures: "SLUMS", patient: '1' },
  { id: 2, cognitiveStatus: "Z00.00", applicableMeasures: "Physical Examination", patient: '2' },
  { id: 3, cognitiveStatus: "Z01.89", applicableMeasures: "Diagnostic Tests", patient: '3' },
];