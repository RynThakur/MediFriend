import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaGlobe } from 'react-icons/fa';

export default function Landing() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to MediFriend</h1>
        <p className="text-xl text-gray-600">Your comprehensive health monitoring platform</p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Check Vitals */}
        <Link
          to="/vitals"
          className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-90"></div>
          <div className="relative p-8 text-white">
            <div className="mb-4">
              <FaHeartbeat className="h-16 w-16" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Check Your Vitals</h2>
            <p className="text-lg opacity-90 mb-6">
              Monitor your health metrics, track vital signs, and get personalized recommendations
            </p>
            <div className="inline-flex items-center space-x-2 font-semibold">
              <span>Get Started</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </Link>

        {/* Global Statistics */}
        <Link
          to="/global"
          className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-90"></div>
          <div className="relative p-8 text-white">
            <div className="mb-4">
              <FaGlobe className="h-16 w-16" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Global Statistics</h2>
            <p className="text-lg opacity-90 mb-6">
              Track worldwide COVID-19 statistics, view country-specific data, and stay informed
            </p>
            <div className="inline-flex items-center space-x-2 font-semibold">
              <span>Explore Data</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Why Choose MediCheck Section */}
      <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose MediFriend?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Comprehensive Monitoring</h3>
            <p className="text-gray-600">Track multiple vital signs and health metrics in one place</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Real-time Updates</h3>
            <p className="text-gray-600">Get instant access to global health statistics and trends</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Personal Insights</h3>
            <p className="text-gray-600">Receive tailored health recommendations based on your data</p>
          </div>
        </div>
      </div>
    </div>
  );
}
