import { useState } from 'react';

const Todos = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onSave = () => {
    if (todo.trim()) {
      setTodos((prev) => [...prev, { id: Date.now(), value: todo, marked: false }]);
      setTodo('');
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') onSave();
  };

  const onDelete = (id) => setTodos((prev) => prev.filter((d) => d.id !== id));

  const onMarked = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, marked: !t.marked } : t))
    );
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">📝 Todos</h1>

      <div className="flex gap-2 mb-6">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-indigo-500 transition-colors"
        />
        <button
          onClick={onSave}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg border border-gray-700"
          >
            <input
              type="checkbox"
              onChange={() => onMarked(item.id)}
              checked={item.marked}
              className="w-5 h-5 cursor-pointer accent-indigo-500"
            />
            <span className={`flex-1 ${item.marked ? 'line-through text-gray-500' : ''}`}>
              {item.value}
            </span>
            <button
              onClick={() => onDelete(item.id)}
              className="text-red-400 text-xl hover:bg-red-400/10 px-2 py-1 rounded transition-colors"
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No todos yet. Add one above!</p>
      )}
    </div>
  );
};

export default Todos;
