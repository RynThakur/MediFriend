import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { FaGlobe, FaHeartbeat, FaUsers, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

interface GlobalData {
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
  tests: number;
  population: number;
}

export default function GlobalStats() {
  const { data: globalData, isLoading } = useQuery<GlobalData>({
    queryKey: ['global'],
    queryFn: async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/all');
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center space-x-3 mb-8">
        <FaGlobe className="h-10 w-10 text-emerald-600" />
        <h1 className="text-4xl font-bold text-gray-900">Global COVID-19 Statistics</h1>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Active Cases */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <FaHeartbeat className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Active Cases</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">
            {globalData?.active.toLocaleString()}
          </p>
        </div>

        {/* Total Deaths */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <FaUsers className="h-6 w-6 text-red-600" />
            <h3 className="text-lg font-semibold text-gray-900">Total Deaths</h3>
          </div>
          <p className="text-3xl font-bold text-red-600">
            {globalData?.deaths.toLocaleString()}
          </p>
        </div>

        {/* Recovered */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <FaCheckCircle className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Recovered</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">
            {globalData?.recovered.toLocaleString()}
          </p>
        </div>

        {/* Total Tests */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <FaGlobe className="h-6 w-6 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">Total Tests</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600">
            {globalData?.tests.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Country-Specific Data Link */}
      <Link
        to="/global/countries"
        className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">View Country-Specific Data</h2>
            <p className="text-gray-600">
              Explore detailed statistics and trends for individual countries
            </p>
          </div>
          <FaArrowRight className="h-6 w-6 text-gray-400" />
        </div>
      </Link>
    </div>
  );
}
