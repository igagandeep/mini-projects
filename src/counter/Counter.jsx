import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-8">🔢 {count}</h1>

      <div className="flex gap-4 justify-center">
        <button
          onClick={increment}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all"
        >
          + Increment
        </button>
        <button
          onClick={decrement}
          disabled={count === 0}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          - Decrement
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
