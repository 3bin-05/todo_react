import React from 'react';
import { CheckSquare } from 'lucide-react';

interface HeaderProps {
  stats: {
    total: number;
    active: number;
    completed: number;
  };
}

export const Header: React.FC<HeaderProps> = ({ stats }) => {
  const completionPercentage = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
          <CheckSquare className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Todo App
        </h1>
      </div>
      
      {stats.total > 0 && (
        <div className="space-y-2">
          <p className="text-gray-600">
            {stats.active} active, {stats.completed} completed of {stats.total} total
          </p>
          <div className="max-w-xs mx-auto bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500 ease-out"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-500">{completionPercentage}% complete</p>
        </div>
      )}
    </div>
  );
};