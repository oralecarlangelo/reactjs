# React Hooks

## Overview

React Hooks are a set of built-in functions provided by React that allow you to use state and other React features in functional components. With Hooks, you can add state, lifecycle methods, context, and more to your functional components without needing to convert them to class components. In this topic, we will explore the commonly used built-in Hooks in React, including useState, useEffect, useContext, and useReducer.

## Learning Objectives

By the end of this topic, you will:

- Deep dive into React Hooks and understand their benefits.
- Learn how to use useState, useEffect, useContext, and useReducer Hooks in your functional components.

## useState Hook

The useState Hook allows you to add state to functional components. It returns a pair of values: the current state and a function to update the state. Here's an example:

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```

In the above example, the `Counter` component uses the useState Hook to add a count state variable and a `setCount` function to update the count. Clicking the "Increment" or "Decrement" buttons will update the count and re-render the component.

## useEffect Hook

The useEffect Hook allows you to perform side effects in functional components. It takes a callback function that will be executed after every render. Here's an example:

```javascript
function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Data Fetcher</h1>
      {data ? <p>{data}</p> : <p>Loading data...</p>}
    </div>
  );
}
```

In the above example, the `DataFetcher` component fetches data using the fetchData function and updates the data state when the data is available. The empty dependency array [] passed as the second argument to useEffect ensures that the effect runs only once when the component is mounted.

## useContext Hook

The useContext Hook allows you to access the value of a context in functional components. It takes a context object created using the React.createContext function. Here's an example:

```javascript
const ThemeContext = React.createContext("light");

function ThemeToggle() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}
```

In the above example, the ThemeToggle component uses the useContext Hook to access the current theme value from the ThemeContext. It renders the current theme in the UI.

## useReducer Hook

The useReducer Hook is an alternative to useState for managing complex state logic. It takes a reducer function and an initial state and returns the current state and a dispatch function to update the state. Here's an example:

```javascript
const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
```

In the above example, the `CounterReducer` component uses the `useReducer` Hook to manage the count state. It defines a `counterReducer` function that handles state updates based on different action types. The state and dispatch function are obtained from useReducer, and clicking the "Increment" or "Decrement" buttons dispatches the corresponding actions to update the state.
