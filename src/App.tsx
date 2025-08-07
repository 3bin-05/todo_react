import React from 'react';
import { useTodos } from './hooks/useTodos';
import { Header } from './components/Header';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { FilterBar } from './components/FilterBar';

function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    updateTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    stats,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Header stats={stats} />
        <AddTodo onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
        <FilterBar
          currentFilter={filter}
          onFilterChange={setFilter}
          stats={stats}
          onClearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

export default App;