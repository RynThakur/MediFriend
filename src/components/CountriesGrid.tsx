import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { fetchCountries } from '../api/covidApi';
import { Country } from '../types/Index';
import LoadingSpinner from './common/LoadingSpinner';
import ErrorMessage from './common/ErrorMessage';

export default function CountriesGrid() {
  const { data: countries, isLoading, error } = useQuery<Country[]>({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Failed to load countries data" />;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Global COVID-19 Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {countries?.map((country) => (
          <Link
            key={country.countryInfo._id}
            to={`/country/${country.countryInfo.iso2 || country.country}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative h-40">
              <img
                src={country.countryInfo.flag}
                alt={`${country.country} flag`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-white" />
                  <h2 className="text-xl font-bold text-white">{country.country}</h2>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Cases</p>
                  <p className="font-semibold text-gray-900">{country.cases.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Deaths</p>
                  <p className="font-semibold text-red-600">{country.deaths.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Recovered</p>
                  <p className="font-semibold text-green-600">{country.recovered.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}