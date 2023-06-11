import { useState } from 'react';

import Button from './components/button';
import LabeledInput from './components/input';
import useCount from './use-count';

const Counter = () => {
  const { count, increment, decrement, reset, set } = useCount();
  const [value, setValue] = useState(0);

  return (
    <main className="mx-auto w-96 flex flex-col gap-8 items-center">
      <h1>Counter</h1>
      <p className="text-7xl">{count}</p>
      <div className="flex place-content-between w-full">
        <Button className="button" onClick={decrement}>
          Decrement
        </Button>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={increment}>Increment</Button>
      </div>
      <div>
        <form
          className="flex gap-4 items-center"
          onSubmit={(e) => {
            e.preventDefault();
            set(value);
          }}
        >
          <LabeledInput
            id="set-count"
            label="Set Count"
            onChange={(e) => setValue(e.target.valueAsNumber)}
            value={value}
          />
          <Button variant="primary" type="submit">
            Set
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Counter;
