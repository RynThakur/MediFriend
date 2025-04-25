import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Activity, Users, UserCheck, HeartPulse } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchCountryData, fetchHistoricalData } from '../api/covidApi';
import { Country, HistoricalData } from '../types/Index';
import LoadingSpinner from './common/LoadingSpinner';
import ErrorMessage from './common/ErrorMessage';
import StatCard from './stats/StatCard';

export default function CountryDetails() {
  const { countryId } = useParams<{ countryId: string }>();

  const { data: countryData, isLoading: isLoadingCountry, error: countryError } = useQuery<Country>({
    queryKey: ['country', countryId],
    queryFn: () => fetchCountryData(countryId!),
    enabled: !!countryId,
  });

  const { data: historicalData, isLoading: isLoadingHistory, error: historyError } = useQuery<{ timeline: HistoricalData }>({
    queryKey: ['historical', countryId],
    queryFn: () => fetchHistoricalData(countryId!),
    enabled: !!countryId,
  });

  if (isLoadingCountry || isLoadingHistory) return <LoadingSpinner />;
  if (countryError || historyError) return <ErrorMessage message="Failed to load country data" />;
  if (!countryData) return <ErrorMessage message="Country not found" />;

  const chartData = historicalData?.timeline ? Object.entries(historicalData.timeline.cases).map(([date, cases]) => ({
    date,
    cases,
    deaths: historicalData.timeline.deaths[date],
    recovered: historicalData.timeline.recovered[date],
  })) : [];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <img
          src={countryData.countryInfo.flag}
          alt={`${countryData.country} flag`}
          className="w-16 h-12 object-cover rounded shadow"
        />
        <h1 className="text-3xl font-bold text-gray-900">{countryData.country}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Cases"
          value={countryData.active}
          Icon={Activity}
          color="blue-600"
        />
        <StatCard
          title="Total Deaths"
          value={countryData.deaths}
          Icon={Users}
          color="red-600"
        />
        <StatCard
          title="Recovered"
          value={countryData.recovered}
          Icon={UserCheck}
          color="green-600"
        />
        <StatCard
          title="Tests"
          value={countryData.tests}
          Icon={HeartPulse}
          color="purple-600"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Last 30 Days Trend</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <YAxis />
              <Tooltip
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
                formatter={(value: number) => [value.toLocaleString(), '']}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="cases"
                stroke="#3B82F6"
                name="Cases"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="deaths"
                stroke="#DC2626"
                name="Deaths"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="recovered"
                stroke="#10B981"
                name="Recovered"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}