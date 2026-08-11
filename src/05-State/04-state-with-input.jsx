import { useState } from "react";

function StateWithInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>State with Input</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p>Hello, {name || "Guest"}!</p>
    </div>
  );
}

export default StateWithInput;
