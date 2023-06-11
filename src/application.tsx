import { useState } from 'react';

import Button from './components/button';
import LabeledInput from './components/input';
import useCount from './use-count';
import Box from './components/box';

const Counter = () => {
  const { count, increment, decrement, reset, set } = useCount();
  const [value, setValue] = useState(0);

  return (
    <Box as="main" className="mx-auto w-96 flex flex-col gap-8 items-center">
      <Box as="h1">Counter</Box>
      <Box as="p" className="text-7xl">
        {count}
      </Box>
      <Box as="section" className="flex place-content-between w-full">
        <Button className="button" onClick={decrement}>
          Decrement
        </Button>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={increment}>Increment</Button>
      </Box>
      <Box>
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
            type="number"
            onChange={(e) => setValue(e.target.valueAsNumber)}
            value={value}
          />
          <Button variant="primary" type="submit">
            Set
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Counter;
