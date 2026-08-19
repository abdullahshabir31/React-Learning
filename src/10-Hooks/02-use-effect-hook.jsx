import { useEffect, useState } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or count changed");
  }, [count]);

  return (
    <div>
      <h1>useEffect Hook</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default UseEffectHook;
