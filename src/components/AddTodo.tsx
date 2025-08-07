import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full px-6 py-4 pr-16 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl 
                   placeholder:text-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                   focus:border-blue-500/50 transition-all duration-200 hover:bg-white/15"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-blue-500 to-purple-600 
                   text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};