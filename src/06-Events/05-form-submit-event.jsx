import { useState } from "react";

function FormSubmitEvent() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Welcome, ${name}!`);
  };

  return (
    <div>
      <h1>Form Submit Event</h1>

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

export default FormSubmitEvent;
