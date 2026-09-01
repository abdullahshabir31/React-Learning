import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function Dashboard() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Authentication</h2>

      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>

      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

function ContextProviderExample() {
  return (
    <AuthProvider>
      <h1>Context Provider</h1>
      <Dashboard />
    </AuthProvider>
  );
}

export default ContextProviderExample;
