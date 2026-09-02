import { useMemo, useState } from "react";

function UseMemoOptimization() {
  const [number, setNumber] = useState(10);
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation running...");

    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += number;
    }

    return result;
  }, [number]);

  return (
    <div>
      <h1>useMemo Optimization</h1>

      <p>Number: {number}</p>
      <p>Result: {expensiveCalculation}</p>
      <p>Count: {count}</p>

      <button onClick={() => setNumber(number + 1)}>Change Number</button>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default UseMemoOptimization;
