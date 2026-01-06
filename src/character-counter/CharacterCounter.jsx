import { useState } from 'react';

const MAX_LENGTH = 100;

const CharacterCounter = () => {
  const [text, setText] = useState('');
  const isWarning = text.length >= MAX_LENGTH * 0.8;
  const isMax = text.length >= MAX_LENGTH;

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">✍️ Character Counter</h1>

      <textarea
        maxLength={MAX_LENGTH}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
        rows={6}
        className={`w-full px-4 py-3 rounded-lg border-2 bg-gray-800 text-white focus:outline-none transition-colors resize-none ${
          isMax
            ? 'border-red-500 focus:border-red-500'
            : isWarning
            ? 'border-yellow-500 focus:border-yellow-500'
            : 'border-gray-700 focus:border-indigo-500'
        }`}
      />

      <div className="flex justify-between items-center mt-3">
        <p className={`text-sm ${isMax ? 'text-red-500' : isWarning ? 'text-yellow-500' : 'text-gray-500'}`}>
          {isMax
            ? '🚫 Character limit reached'
            : isWarning
            ? '⚠️ Approaching limit'
            : ''}
        </p>
        <p className={`font-medium ${isMax ? 'text-red-500' : isWarning ? 'text-yellow-500' : 'text-gray-400'}`}>
          {text.length}/{MAX_LENGTH}
        </p>
      </div>
    </div>
  );
};

export default CharacterCounter;
