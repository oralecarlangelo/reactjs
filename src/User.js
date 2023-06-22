import React, { createContext, useContext, useState } from "react";
// Advance example for use Context
// Create a context
const UserContext = createContext();

// Component that provides the context value
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Component that consumes the context
function UserProfile() {
  const { user, logout } = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please login.</p>
      )}
    </div>
  );
}

// Component that consumes the context
function UserLogin() {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic, validate credentials, etc.
    const userData = { name: username, password: password };
    login(userData);
  };

  return (
    <div>
      <h1>User Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// Parent component
function User() {
  return (
    <UserProvider>
      <UserProfile />
      <UserLogin />
    </UserProvider>
  );
}

export default User;
