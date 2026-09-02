import { memo, useCallback, useState } from "react";

const Button = memo(function Button({ onClick }) {
  console.log("Button rendered");

  return <button onClick={onClick}>Child Button</button>;
});

function UseCallbackOptimization() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h1>useCallback Optimization</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <Button onClick={handleClick} />
    </div>
  );
}

export default UseCallbackOptimization;
