import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHeartbeat, FaHistory, FaHome, FaVirus, FaGlobe } from 'react-icons/fa';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaHeartbeat className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">MediCheck</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={`flex items-center space-x-1 ${isActive('/')}`}>
              <FaHome className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/vitals/check" className={`flex items-center space-x-1 ${isActive('/vitals/check')}`}>
              <FaHeartbeat className="h-5 w-5" />
              <span>Check Vitals</span>
            </Link>
            <Link to="/vitals/covid" className={`flex items-center space-x-1 ${isActive('/vitals/covid')}`}>
              <FaVirus className="h-5 w-5" />
              <span>COVID-19</span>
            </Link>
            <Link to="/vitals/history" className={`flex items-center space-x-1 ${isActive('/vitals/history')}`}>
              <FaHistory className="h-5 w-5" />
              <span>History</span>
            </Link>
            <Link to="/global" className={`flex items-center space-x-1 ${isActive('/global')}`}>
              <FaGlobe className="h-5 w-5" />
              <span>Global Stats</span>
            </Link>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
