import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Thermometer, Clock, History } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to MediFriend</h1>
        <p className="text-xl text-gray-600">Monitor your vitals and get instant health insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Link
          to="/check-vitals"
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Activity className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Check Your Vitals</h2>
          </div>
          <p className="text-gray-600">
            Input your vital signs and get instant health recommendations
          </p>
        </Link>

        <Link
          to="/history"
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <History className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">View History</h2>
          </div>
          <p className="text-gray-600">
            Track your health progress over time
          </p>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Heart Rate</h3>
              <p className="text-gray-600">Monitor your pulse rate</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-2 rounded-lg">
              <Thermometer className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Temperature</h3>
              <p className="text-gray-600">Track body temperature</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Real-time</h3>
              <p className="text-gray-600">Instant health insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}