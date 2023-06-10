import Button from './components/button';
import useCount from './use-count';

const Counter = () => {
  const { count, increment, decrement, reset, set } = useCount();

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
            const form = e.target as HTMLFormElement;
            const input = form.elements.namedItem(
              'set-count',
            ) as HTMLInputElement;
            set(input.valueAsNumber);
          }}
        >
          <label htmlFor="set-count">Set Count</label>
          <input type="number" id="set-count" name="set-count" />
          <Button variant="primary" type="submit">
            Set
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Counter;
