# Understanding the Context API and useContext Hook

The Context API is a built-in feature in React that allows you to share state and provide it to multiple components without having to pass props manually at each level of the component tree. It provides a way to pass data through the component tree without explicitly passing props down the hierarchy.

# Example

```javascript
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
```

## Usage

1. Create a context object using the createContext function.
2. Wrap the components that need access to the context with a Provider component, passing the desired value as the value prop.
3. Use the useContext hook to access the context value within a functional component.

## Explanation

1. In the example above, we create a context object named `ThemeContext` using the `createContext` function. This context will be used to share the `theme` value and `setTheme` function.
2. In the App component, we wrap the components that need access to the `theme` and `setTheme` values with the `ThemeContext.Provider` component. The value prop of the provider specifies the context value to be shared with its descendants.
3. Inside the `Toolbar` component, we use the `useContext` hook to access the theme and setTheme values from the `ThemeContext`. This allows us to toggle the theme by updating the `theme` state using the `setTheme` function.

By using the Context API and the useContext hook, we can efficiently manage global state in React applications without passing props through multiple layers of components.
