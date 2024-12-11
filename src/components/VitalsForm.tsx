import React, { useState } from 'react';
import { FaThermometerHalf, FaHeartbeat, FaLungs, FaWeight, FaUser } from 'react-icons/fa';
import { FiActivity, FiArrowRight } from 'react-icons/fi';
import { VitalsData } from '../types/vitals';
import { saveVitalsRecord } from '../utils/vitalsStorage';

export default function VitalsForm() {
  const [vitals, setVitals] = useState<VitalsData>({
    name: '',
    age: '',
    temperature: '',
    heartRate: '',
    bloodPressure: '',
    oxygenLevel: '',
    weight: ''
  });

  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
    const timestamp = new Date().toISOString();
    saveVitalsRecord({ ...vitals, timestamp });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVitals({ ...vitals, [e.target.name]: e.target.value });
  };

  const getSuggestions = () => {
    const suggestions = [];
    const temp = parseFloat(vitals.temperature);
    const hr = parseInt(vitals.heartRate);
    const o2 = parseInt(vitals.oxygenLevel);
    const age = parseInt(vitals.age);

    if (temp > 37.5) {
      suggestions.push("Your temperature is elevated. Consider resting and monitoring for other symptoms.");
    }
    if (hr > 100) {
      suggestions.push("Your heart rate is high. Try relaxation techniques and avoid caffeine.");
    }
    if (o2 < 95) {
      suggestions.push("Your oxygen levels are slightly low. Practice deep breathing exercises.");
    }

    // Age-specific suggestions
    if (age > 60 && hr > 90) {
      suggestions.push("Given your age, consider consulting a healthcare provider about your heart rate.");
    }

    return suggestions.length > 0 ? suggestions : ["Your vitals appear to be within normal ranges. Keep up the good work!"];
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Check Your Vitals</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <FaUser className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={vitals.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <FaUser className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={vitals.age}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="25"
                  required
                />
              </div>
            </div>
          </div>

          {/* Temperature */}
          <div className="flex items-center space-x-4">
            <div className="bg-red-100 p-2 rounded-lg">
              <FaThermometerHalf className="h-6 w-6 text-red-600" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Temperature (°C)</label>
              <input
                type="number"
                step="0.1"
                name="temperature"
                value={vitals.temperature}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="36.5"
                required
              />
            </div>
          </div>

          {/* Heart Rate */}
          <div className="flex items-center space-x-4">
            <div className="bg-pink-100 p-2 rounded-lg">
              <FaHeartbeat className="h-6 w-6 text-pink-600" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Heart Rate (BPM)</label>
              <input
                type="number"
                name="heartRate"
                value={vitals.heartRate}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="75"
                required
              />
            </div>
          </div>

          {/* Blood Pressure */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FiActivity className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Blood Pressure (mmHg)</label>
              <input
                type="text"
                name="bloodPressure"
                value={vitals.bloodPressure}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="120/80"
                required
              />
            </div>
          </div>

          {/* Oxygen Level */}
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <FaLungs className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Oxygen Level (%)</label>
              <input
                type="number"
                name="oxygenLevel"
                value={vitals.oxygenLevel}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="98"
                required
              />
            </div>
          </div>

          {/* Weight */}
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <FaWeight className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
              <input
                type="number"
                step="0.1"
                name="weight"
                value={vitals.weight}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="70"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full flex items-center justify-center space-x-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <span>Get Health Insights</span>
          <FiArrowRight className="h-4 w-4" />
        </button>
      </form>

      {showResults && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Health Insights for {vitals.name}</h2>
          <div className="space-y-4">
            {getSuggestions().map((suggestion, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FiActivity className="h-5 w-5 text-blue-600" />
                <p className="text-gray-600">{suggestion}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}