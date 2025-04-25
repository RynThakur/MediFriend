export interface VitalsData {
    name: string;
    age: string;
    temperature: string;
    heartRate: string;
    bloodPressure: string;
    oxygenLevel: string;
    weight: string;
  }
  
  export interface VitalsRecord extends VitalsData {
    timestamp: string;
  }
  
  export interface GroupedHistory {
    [key: string]: VitalsRecord[];
  }