# Error Boundary in ReactJS

Error boundaries are a way to gracefully handle and catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.

## Example

Here's a basic example of an Error Boundary component:

```javascript
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Caught error: ", error, "Info: ", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

You can use it as a regular component to wrap potentially problematic components:

```javascript
import ErrorBoundary from "./ErrorBoundary";
import MyComponent from "./MyComponent";

function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

export default App;
```

In the above example, if MyComponent throws an error during rendering, the ErrorBoundary will catch it, display "Something went wrong." and log the error details to the console.

## Methods

### static getDerivedStateFromError(error)

This lifecycle method is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.

### componentDidCatch(error, errorInfo)

This method works like a JavaScript catch {} block, but for components. The method is called when an error is thrown in a component during rendering, in a lifecycle method, or in the constructor of any child component.

## Note

Error boundaries do not catch errors for:

- Event handlers (learn more)
- Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
- Server side rendering
- Errors thrown in the error boundary itself (rather than its children)
