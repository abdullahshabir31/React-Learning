import { useState } from "react";

function StateObject() {
  const [user, setUser] = useState({
    name: "Abdullah",
    age: 24,
    city: "Lahore",
  });

  const updateAge = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };

  return (
    <div>
      <h1>State with Object</h1>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <button onClick={updateAge}>Increase Age</button>
    </div>
  );
}

export default StateObject;
