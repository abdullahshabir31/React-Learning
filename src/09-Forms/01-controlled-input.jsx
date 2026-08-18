import { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Controlled Input</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p>Name: {name}</p>
    </div>
  );
}

export default ControlledInput;
