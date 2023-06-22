# Creating and Using Custom Hooks

Custom hooks in React allow you to extract reusable logic from components and share it across multiple components. They enable you to create your own custom abstractions and encapsulate complex functionality into reusable hooks. Here's an example of creating and using a custom hook:

## Example: UseWindowWidth Hook

The following example demonstrates a custom hook called useWindowWidth. It returns the current width of the window and updates it whenever the window is resized.

```javascript
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
}

function App() {
  const windowWidth = useWindowWidth();

  return (
    <div>
      <p>Window Width: {windowWidth}px</p>
    </div>
  );
}

export default App;
```

In this example, the `useWindowWidth` hook is created. It uses the `useState` and `useEffect` hooks from React. The hook initializes the state with the current window width and updates it whenever the window is resized. The hook also adds an event listener for the resize event and removes it when the component unmounts.

The `App` component uses the `useWindowWidth` hook to retrieve the current window width and renders it in the UI.

## Documentation

To create and use custom hooks, follow these steps:

1. Create a new function starting with the use prefix (e.g., `useCustomHookName`).
2. Inside the custom hook, use other built-in hooks or custom hooks to implement the desired functionality.
3. Return any values or functions that you want to expose to the components using the custom hook.
4. Import and use the custom hook in any component that needs the shared functionality.
Custom hooks can be powerful tools for reusing logic and abstracting complex functionality into reusable units. They enhance code organization and maintainability by separating concerns and promoting code reuse.

When creating custom hooks, remember to follow the rules of hooks:

Only call hooks at the top level of a function component or other custom hooks.
Don't call hooks inside loops, conditions, or nested functions.
