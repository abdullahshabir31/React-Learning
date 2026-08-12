import { useState } from "react";

function InputEvent() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Input Event</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      <p>Your name: {name}</p>
    </div>
  );
}

export default InputEvent;
