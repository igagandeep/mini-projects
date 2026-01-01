import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(prev => prev + 1)
  };

  const decrementCounter = () => {
    setCount(prev => prev - 1)
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>

      <div style={{ display: 'flex' }}>
        <button onClick={incrementCounter}>Increment</button>
        <button disabled={count === 0} onClick={decrementCounter}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
