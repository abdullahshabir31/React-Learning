import { createContext, useContext } from "react";

const ThemeContext = createContext();

function Button() {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        padding: "10px 20px",
        border: "none",
      }}
    >
      Themed Button
    </button>
  );
}

function UseContextExample() {
  const theme = {
    background: "black",
    color: "white",
  };

  return (
    <ThemeContext.Provider value={theme}>
      <h1>useContext</h1>
      <Button />
    </ThemeContext.Provider>
  );
}

export default UseContextExample;
