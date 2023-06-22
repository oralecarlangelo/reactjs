import React, { useState, useEffect, useContext, useReducer } from "react";
import ShoppingCart from "./ShoppingCart";
import User from "./User";

// Example 1: useState Hook
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

const fetchData = () => {
  return new Promise((resolve, reject) => {
    resolve("DATA");
  });
};

// Example 2: useEffect Hook
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

// Example 3: useContext Hook
const ThemeContext = React.createContext("light");

function ThemeToggle() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}

// Example 4: useReducer Hook
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

// Example usage of the components
function App() {
  return (
    <div>
      <Counter />
      <DataFetcher />
      <ThemeContext.Provider value="dark">
        <ThemeToggle />
      </ThemeContext.Provider>
      <CounterReducer />
      <ShoppingCart />
      <User />
    </div>
  );
}

export default App;
