import { useState } from "react";

function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default UseStateExample;
