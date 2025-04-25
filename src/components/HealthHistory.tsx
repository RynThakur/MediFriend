import React from 'react';
import { Activity, Trash2, ChevronDown, ChevronRight } from 'lucide-react';
import { VitalsRecord } from '../types/vitals';
import { getVitalsHistory, clearVitalsHistory, groupHistoryByName } from '../utils/vitalsStorage';

export default function HealthHistory() {
  const [history, setHistory] = React.useState<VitalsRecord[]>(() => getVitalsHistory());
  const [expandedNames, setExpandedNames] = React.useState<Set<string>>(new Set());

  const groupedHistory = React.useMemo(() => groupHistoryByName(history), [history]);

  const clearHistory = () => {
    clearVitalsHistory();
    setHistory([]);
  };

  const toggleName = (name: string) => {
    const newExpanded = new Set(expandedNames);
    if (newExpanded.has(name)) {
      newExpanded.delete(name);
    } else {
      newExpanded.add(name);
    }
    setExpandedNames(newExpanded);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Health History</h1>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
            <span>Clear History</span>
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No History Yet</h2>
          <p className="text-gray-600">Start by checking your vitals to build your health history.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedHistory).map(([name, records]) => (
            <div key={name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleName(name)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
                  <span className="text-sm text-gray-500">({records.length} records)</span>
                </div>
                {expandedNames.has(name) ? (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                )}
              </button>

              {expandedNames.has(name) && (
                <div className="border-t border-gray-200">
                  {records.map((record, index) => (
                    <div key={index} className="p-4 border-b border-gray-100 last:border-b-0">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Age: {record.age} years</p>
                          <p className="text-sm text-gray-500">
                            {new Date(record.timestamp).toLocaleDateString()} at{' '}
                            {new Date(record.timestamp).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Temperature</p>
                          <p className="font-semibold text-gray-900">{record.temperature}°C</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Heart Rate</p>
                          <p className="font-semibold text-gray-900">{record.heartRate} BPM</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Blood Pressure</p>
                          <p className="font-semibold text-gray-900">{record.bloodPressure} mmHg</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Oxygen Level</p>
                          <p className="font-semibold text-gray-900">{record.oxygenLevel}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Weight</p>
                          <p className="font-semibold text-gray-900">{record.weight} kg</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}