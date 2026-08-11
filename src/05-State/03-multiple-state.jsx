import { useState } from "react";

function MultipleState() {
  const [name, setName] = useState("Abdullah");
  const [age, setAge] = useState(24);

  return (
    <div>
      <h1>Multiple State Variables</h1>

      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <button onClick={() => setName("Ahmed")}>Change Name</button>

      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}

export default MultipleState;
