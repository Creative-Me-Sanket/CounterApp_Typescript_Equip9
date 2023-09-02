import React, { useState } from 'react';

type CounterState = {
  count: number;
};

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<CounterState>({ count: 0 });

  const increment = () => {
    setCounter({ count: counter.count + 1 });
  };

  const decrement = () => {
    if (counter.count > 0) {
      setCounter({ count: counter.count - 1 });
    }
  };

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
