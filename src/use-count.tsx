import { useState } from 'react';

const useCount = (initial = 0) => {
  const [count, setCount] = useState(initial);
  const increment = () => setCount((n) => n + 1);
  const decrement = () => setCount((n) => n - 1);
  const reset = () => setCount(initial);
  const set = (n: number) => setCount(n);

  return {
    count,
    increment,
    decrement,
    reset,
    set,
  };
};

export default useCount;
