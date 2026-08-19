import { useCallback, useState } from "react";

function Button({ handleClick }) {
  console.log("Button rendered");

  return <button onClick={handleClick}>Click Child Button</button>;
}

function UseCallbackHook() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello");

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h1>useCallback Hook</h1>

      <p>Count: {count}</p>
      <p>{message}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <button onClick={() => setMessage("Hello React")}>Change Message</button>

      <Button handleClick={handleClick} />
    </div>
  );
}

export default UseCallbackHook;
