import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaVirus, FaHistory, FaGlobe } from 'react-icons/fa';

export default function VitalsHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Monitoring</h1>
        <p className="text-xl text-gray-600">Track your vitals and get instant health insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Check Vitals */}
        <Link
          to="/vitals/check"
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FaHeartbeat className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Check Vitals</h2>
          </div>
          <p className="text-gray-600">
            Input your vital signs and get instant health recommendations
          </p>
        </Link>

        {/* COVID-19 Check */}
        <Link
          to="/vitals/covid"
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <FaVirus className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">COVID-19 Check</h2>
          </div>
          <p className="text-gray-600">
            Assess your COVID-19 risk based on symptoms
          </p>
        </Link>

        {/* History */}
        <Link
          to="/vitals/history"
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FaHistory className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">History</h2>
          </div>
          <p className="text-gray-600">
            View your health records and track progress
          </p>
        </Link>

        {/* Global Stats */}
        <Link
          to="/global"
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <FaGlobe className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Global Stats</h2>
          </div>
          <p className="text-gray-600">
            View worldwide COVID-19 statistics
          </p>
        </Link>
      </div>
    </div>
  );
}
