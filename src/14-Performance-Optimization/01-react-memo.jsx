import { memo, useState } from "react";

const User = memo(function User({ name }) {
  console.log("User component rendered");

  return <h2>Hello, {name}</h2>;
});

function ReactMemoExample() {
  const [count, setCount] = useState(0);
  const [name] = useState("Abdullah");

  return (
    <div>
      <h1>React.memo</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <User name={name} />
    </div>
  );
}

export default ReactMemoExample;
