import { useState } from "react";

function FormSubmit() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <h1>Form Submit</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormSubmit;
