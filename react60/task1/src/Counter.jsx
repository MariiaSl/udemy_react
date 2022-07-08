import React, { useCallback, useMemo, useState } from 'react';
import ResetBtn from './ResetBtn';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const reset = useCallback(() => {
    setCounter(0);
  }, []);

  const decrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const square = useMemo(() => counter ** 2, [counter]);

  return (
    <div>
      <div className="counter">
        <button type="button" className="counter__button" onClick={decrement}>
          -
        </button>
        <span className="counter__value">{square}</span>
        <button type="button" className="counter__button" onClick={increment}>
          +
        </button>
      </div>
      <ResetBtn onReset={reset} />
    </div>
  );
};

export default Counter;
