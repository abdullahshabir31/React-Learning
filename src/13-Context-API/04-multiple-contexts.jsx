import { createContext, useContext } from "react";

const UserContext = createContext();
const ThemeContext = createContext();

function Profile() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        padding: "20px",
      }}
    >
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.role}</p>
    </div>
  );
}

function MultipleContexts() {
  const user = {
    name: "Abdullah Shabir",
    email: "abdullah@example.com",
    role: "React Developer",
  };

  const theme = {
    background: "black",
    color: "white",
  };

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
        <h1>Multiple Contexts</h1>

        <Profile />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default MultipleContexts;
