export interface Country {
    country: string;
    countryInfo: {
      _id: number;
      flag: string;
      lat: number;
      long: number;
      iso2: string;
      iso3: string;
    };
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
    tests: number;
    population: number;
  }
  
  export interface HistoricalData {
    cases: { [key: string]: number };
    deaths: { [key: string]: number };
    recovered: { [key: string]: number };
  }
  
  export interface GlobalData {
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
    tests: number;
    population: number;
  }