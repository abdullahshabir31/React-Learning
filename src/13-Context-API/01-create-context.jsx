import { createContext, useContext } from "react";

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

function CreateContextExample() {
  const user = {
    name: "Abdullah",
    role: "Student",
  };

  return (
    <UserContext.Provider value={user}>
      <h1>Create Context</h1>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default CreateContextExample;
