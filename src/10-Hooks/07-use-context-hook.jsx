import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

function UseContextHook() {
  const [user] = useState({
    name: "Abdullah",
    role: "Student",
  });

  return (
    <UserContext.Provider value={user}>
      <h1>useContext Hook</h1>

      <UserProfile />
    </UserContext.Provider>
  );
}

export default UseContextHook;
