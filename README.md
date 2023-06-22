# Lazy Loading and Code-Splitting with React.lazy and Suspense

Lazy loading and code-splitting are techniques used to improve the performance of React applications by loading components or routes asynchronously when they are needed, rather than upfront.

## 1. Lazy Loading with React.lazy
   React provides the React.lazy function, which allows you to lazily load a component. It takes a function that returns a dynamic import() statement, which specifies the path to the component module.

## Example:

```javascript
import React, { lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function MyComponent() {
  return (
    <div>
      <h1>My Component</h1>
      <LazyComponent />
    </div>
  );
}
```

Documentation: [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)

## 2. Suspense for Fallback Rendering
   To handle the loading state of lazily loaded components, React provides the Suspense component. It allows you to specify a fallback UI that is rendered while the lazily loaded component is being loaded.

## Example:

```javascript
import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function MyComponent() {
  return (
    <div>
      <h1>My Component</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

Documentation: [Suspense](https://reactjs.org/docs/code-splitting.html#suspense)

With lazy loading and code-splitting, you can optimize your React application's performance by loading only the necessary components when they are needed, reducing the initial bundle size and improving the overall loading speed.

It's important to note that lazy loading and code-splitting should be used judiciously, considering the trade-off between performance optimization and user experience. It's recommended to analyze and profile your application's performance to identify the parts that would benefit the most from lazy loading.

## When to use lazy and Suspense

In React, lazy and Suspense are typically used together to enable lazy loading and code-splitting of components. Here's a general guideline for when to use each:

- Use lazy when you want to lazily load a component. This is useful when you have a large component or a component that is not needed immediately when the parent component renders. By lazy loading the component, you can improve the initial loading performance of your application.

- Use Suspense along with lazy to handle the loading state and fallback UI. Suspense is a React component that allows you to specify a fallback UI while a lazy-loaded component is being loaded. It provides a smooth transition between the loading state and the fully rendered state of the component.