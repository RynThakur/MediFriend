const BASE_URL = 'https://disease.sh/v3/covid-19';

export const fetchCountries = async () => {
  const response = await fetch(`${BASE_URL}/countries`);
  if (!response.ok) {
    throw new Error('Failed to fetch countries');
  }
  return response.json();
};

export const fetchCountryData = async (countryId: string) => {
  const response = await fetch(`${BASE_URL}/countries/${countryId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data for ${countryId}`);
  }
  return response.json();
};

export const fetchHistoricalData = async (countryId: string) => {
  const response = await fetch(`${BASE_URL}/historical/${countryId}?lastdays=30`);
  if (!response.ok) {
    throw new Error(`Failed to fetch historical data for ${countryId}`);
  }
  return response.json();
};

export const fetchGlobalData = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  if (!response.ok) {
    throw new Error('Failed to fetch global data');
  }
  return response.json();
};