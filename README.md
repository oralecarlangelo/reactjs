## Using useMemo

The useMemo hook is used to memoize the value of a computation. It allows you to optimize performance by avoiding unnecessary re-computations when the dependencies have not changed.

### Example:

```javascript
import React, { useMemo } from "react";

function ExpensiveComponent({ data }) {
  const expensiveValue = useMemo(() => computeExpensiveValue(data), [data]);

  return <div>{expensiveValue}</div>;
}

function computeExpensiveValue(data) {
  // Simulating an expensive computation
  console.log("Performing an expensive computation...");
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    result += data[i];
  }
  return result;
}

export default ExpensiveComponent;
```

In this example, the `ExpensiveComponent` receives a `data` prop. The expensive computation is performed inside the `c`omputeExpensiveValue`function. By using useMemo, we memoize the value of`expensiveValue` based on the data dependency. This means that the expensive computation will only be performed when the data prop changes.

Documentation: [React useMemo Hook](https://reactjs.org/docs/hooks-reference.html#usememo)

## Using useCallback

The useCallback hook is used to memoize functions. It is particularly useful when passing functions to child components, as it ensures that the function reference remains stable and doesn't cause unnecessary re-renders.

### Example:

```javascript
import React, { useCallback } from "react";

function ParentComponent() {
  const handleClick = useCallback(() => {
    // Handle click event
    console.log("Button clicked!");
  }, []);

  return <ChildComponent onClick={handleClick} />;
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}
```

In this example, the handleClick function is memoized using `useCallback`. This guarantees that the function reference remains the same across renders of the ParentComponent. This is important when passing the function as a prop to the ChildComponent, as it prevents unnecessary re-rendering of the child component when the parent re-renders.

Documentation: [React useCallback Hook](https://reactjs.org/docs/hooks-reference.html#usecallback)

## React memo Documentation
The memo function in React is a Higher-Order Component (HOC) that allows you to memoize the rendering of a functional component. It helps optimize performance by preventing unnecessary re-renders when the component's props haven't changed.

Usage
To use memo with a functional component, follow these steps:

```javascript

import React, { memo } from 'react';

// A simple functional component
function SomeComponent({ name }) {
  console.log('Rendering SomeComponent');
  return <div>Hello, {name}!</div>;
}

// Wrapping the component with memo to memoize its rendering
const MemoizedComponent = memo(SomeComponent);

function ParentMemoComponent() {
  const [count, setCount] = React.useState(0);

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Increase Count</button>
      <MemoizedComponent name={`User ${count}`} />
    </div>
  );
}

export default ParentMemoComponent;

```

In this example, the `SomeComponent` is a simple functional component that receives a name prop. The `MemoizedComponent` is created by wrapping `SomeComponent` with `memo`. This ensures that the `MemoizedComponent` will only re-render if the name prop changes.

By using memo in this situation, unnecessary re-renders of the `MemoizedComponent` are avoided when the props remain the same, leading to improved performance.

### Considerations
- `memo` performs a shallow equality check on the component's props to determine if it needs to be re-rendered. If the props are complex objects or arrays, make sure to handle immutability properly to ensure accurate equality checks.

- `memo` only memoizes the rendering of the component. It doesn't handle deep comparisons or memoization of function references. If you need more fine-grained control over memoization, consider using the `useMemo` or `useCallback` hooks.

When using memo, remember to import it from the 'react' module to access the memo function.

## When to use useCallback and useMemo

### useCallback:

1. Use useCallback when you want to memoize a function and prevent unnecessary re-creation of that function on each render.
2. It's useful when passing a callback function as a prop to child components, especially when the child components use reference equality for prop comparison (e.g., React.memo or shouldComponentUpdate).
3. It helps optimize performance by ensuring that the same function instance is used as long as the dependencies specified in the dependency array remain unchanged.
4. Specify the dependencies in the dependency array to trigger the creation of a new function instance when any of the dependencies change.
5. Common use cases for useCallback include event handlers, memoized computations, and passing down memoized callbacks to child components.

### useMemo:

1. Use useMemo when you want to memoize the result of a computation and avoid recomputing it on each render.
2. It's useful when you have expensive computations or calculations that depend on certain values or props.
3. It helps optimize performance by caching the result of the computation and returning the cached result when the dependencies specified in the dependency array remain unchanged.
4. Specify the dependencies in the dependency array to trigger the re-computation of the value when any of the dependencies change.
5. Common use cases for useMemo include memoizing computed values, memoizing the return value of a function, and avoiding unnecessary re-renders caused by expensive computations.

