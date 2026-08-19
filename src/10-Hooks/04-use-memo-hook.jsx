import { useMemo, useState } from "react";

function UseMemoHook() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const squaredNumber = useMemo(() => {
    console.log("Calculating square...");

    return number * number;
  }, [number]);

  return (
    <div>
      <h1>useMemo Hook</h1>

      <p>Number: {number}</p>
      <p>Square: {squaredNumber}</p>
      <p>Count: {count}</p>

      <button onClick={() => setNumber(number + 1)}>Change Number</button>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default UseMemoHook;
