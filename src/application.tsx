import useCount from './use-count';

const Counter = () => {
  const { count, increment, decrement, reset, set } = useCount();

  return (
    <main className="mx-auto w-96 flex flex-col gap-8 items-center">
      <h1>Counter</h1>
      <p className="text-7xl">{count}</p>
      <div className="flex place-content-between w-full">
        <button className="button" onClick={decrement}>
          Decrement
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
        <button className="button" onClick={increment}>
          Increment
        </button>
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
          <button className="button-primary" type="submit">
            Set
          </button>
        </form>
      </div>
    </main>
  );
};

export default Counter;
