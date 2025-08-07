import React, { useState } from 'react';
import { Check, Edit3, Trash2, X } from 'lucide-react';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onUpdate,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleUpdate = () => {
    if (editText.trim() && editText.trim() !== text) {
      onUpdate(id, editText);
    } else {
      setEditText(text);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(text);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUpdate();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div
      className={`group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all duration-300 
                  hover:bg-white/15 hover:shadow-lg hover:-translate-y-0.5 ${
                    completed ? 'opacity-75' : ''
                  }`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => onToggle(id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center
                      ${
                        completed
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-400 hover:border-green-500 hover:bg-green-50'
                      }`}
        >
          {completed && <Check className="w-4 h-4" />}
        </button>

        <div className="flex-1 min-w-0">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleUpdate}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-gray-800 font-medium focus:outline-none border-b border-blue-500 pb-1"
              autoFocus
            />
          ) : (
            <span
              className={`text-gray-800 font-medium transition-all duration-200 ${
                completed ? 'line-through opacity-60' : ''
              }`}
            >
              {text}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {isEditing ? (
            <button
              onClick={handleCancel}
              className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDelete(id)}
                className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};