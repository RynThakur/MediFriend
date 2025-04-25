import React, { useState } from 'react';
import { FaVirus, FaExclamationTriangle, FaThumbsUp, FaArrowRight } from 'react-icons/fa';

interface Symptoms {
  fever: boolean;
  cough: boolean;
  breathingDifficulty: boolean;
  fatigue: boolean;
  bodyAches: boolean;
  lossOfTaste: boolean;
  soreThroat: boolean;
  exposure: boolean;
}

export default function CovidCheck() {
  const [symptoms, setSymptoms] = useState<Symptoms>({
    fever: false,
    cough: false,
    breathingDifficulty: false,
    fatigue: false,
    bodyAches: false,
    lossOfTaste: false,
    soreThroat: false,
    exposure: false,
  });

  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymptoms({ ...symptoms, [e.target.name]: e.target.checked });
  };

  const getRiskLevel = () => {
    const symptomCount = Object.values(symptoms).filter(Boolean).length;
    if (symptoms.breathingDifficulty || symptomCount >= 4) {
      return 'high';
    } else if (symptomCount >= 2) {
      return 'moderate';
    }
    return 'low';
  };

  const getRecommendations = () => {
    const risk = getRiskLevel();
    switch (risk) {
      case 'high':
        return [
          "Seek immediate medical attention",
          "Self-isolate immediately",
          "Get tested for COVID-19",
          "Monitor your oxygen levels",
          "Keep emergency contacts handy"
        ];
      case 'moderate':
        return [
          "Contact your healthcare provider",
          "Self-isolate as a precaution",
          "Consider getting tested",
          "Monitor your symptoms closely",
          "Rest and stay hydrated"
        ];
      default:
        return [
          "Continue monitoring your symptoms",
          "Practice social distancing",
          "Wear a mask in public",
          "Maintain good hygiene",
          "Stay updated with local guidelines"
        ];
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center space-x-3 mb-8">
        <FaVirus className="h-8 w-8 text-red-600" />
        <h1 className="text-3xl font-bold text-gray-900">COVID-19 Risk Assessment</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-red-50 rounded-lg">
            <FaExclamationTriangle className="h-5 w-5 text-red-600 mr-2" />
            <p className="text-sm text-red-600">
              This is not a diagnostic tool. Please consult healthcare professionals for medical advice.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Select your symptoms:</h2>
            {[
              { name: 'fever', label: 'Fever or chills' },
              { name: 'cough', label: 'Dry cough' },
              { name: 'breathingDifficulty', label: 'Difficulty breathing' },
              { name: 'fatigue', label: 'Fatigue' },
              { name: 'bodyAches', label: 'Body aches' },
              { name: 'lossOfTaste', label: 'Loss of taste or smell' },
              { name: 'soreThroat', label: 'Sore throat' },
              { name: 'exposure', label: 'Recent exposure to COVID-19' },
            ].map(({ name, label }) => (
              <label key={name} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name={name}
                  checked={symptoms[name as keyof Symptoms]}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full flex items-center justify-center space-x-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <span>Get Risk Assessment</span>
          <FaArrowRight className="h-4 w-4" />
        </button>
      </form>

      {showResults && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Assessment Results</h2>
          
          <div className={`p-4 rounded-lg mb-6 ${
            getRiskLevel() === 'high' ? 'bg-red-50' :
            getRiskLevel() === 'moderate' ? 'bg-yellow-50' : 'bg-green-50'
          }`}>
            <div className="flex items-center space-x-2 mb-2">
              <FaExclamationTriangle className={`h-5 w-5 ${
                getRiskLevel() === 'high' ? 'text-red-600' :
                getRiskLevel() === 'moderate' ? 'text-yellow-600' : 'text-green-600'
              }`} />
              <h3 className="font-semibold text-gray-900">
                {getRiskLevel() === 'high' ? 'High Risk' :
                 getRiskLevel() === 'moderate' ? 'Moderate Risk' : 'Low Risk'}
              </h3>
            </div>
            <p className="text-gray-600">Based on your symptoms and risk factors</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Recommendations:</h3>
            {getRecommendations().map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FaThumbsUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <p className="text-gray-600">{recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
