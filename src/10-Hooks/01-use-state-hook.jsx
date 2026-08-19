import { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState Hook</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default UseStateHook;
