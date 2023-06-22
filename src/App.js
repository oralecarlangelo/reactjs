import React, { createContext, useContext, useState } from "react";

// Create a context object
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  // Define a provider component to wrap the components that need access to the context
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <h1>App</h1>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  // Use the useContext hook to access the theme value from the context
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div>
      <h2>Toolbar - {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
