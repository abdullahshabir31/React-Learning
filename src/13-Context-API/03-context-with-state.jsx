import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function CounterDisplay() {
  const { count } = useContext(CounterContext);

  return <h2>Count: {count}</h2>;
}

function CounterButtons() {
  const { setCount } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>

      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function ContextWithState() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <h1>Context with State</h1>

      <CounterDisplay />
      <CounterButtons />
    </CounterContext.Provider>
  );
}

export default ContextWithState;
