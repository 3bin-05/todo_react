import React from 'react';
import { FilterType } from '../types';

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
  onClearCompleted: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  currentFilter,
  onFilterChange,
  stats,
  onClearCompleted,
}) => {
  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: stats.total },
    { key: 'active', label: 'Active', count: stats.active },
    { key: 'completed', label: 'Completed', count: stats.completed },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
      <div className="flex items-center gap-2">
        {filters.map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentFilter === key
                ? 'bg-blue-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-white/20 hover:text-gray-800'
            }`}
          >
            {label} ({count})
          </button>
        ))}
      </div>

      {stats.completed > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors duration-200"
        >
          Clear Completed ({stats.completed})
        </button>
      )}
    </div>
  );
};