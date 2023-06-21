# Props in Functional Components

# Overview

Props (short for properties) are a fundamental concept in React.js that allow you to pass data from a parent component to a child component. In functional components, props are used to customize the behavior or content of the component. In this topic, we will explore what props are and how to use them in functional components.

# Learning Objectives

By the end of this topic, you will:

Understand the purpose and benefits of using props in functional components.
Learn how to pass props to functional components and access them within the component.

# What are Props?

Props are a way to pass data from a parent component to a child component. They are similar to attributes in HTML and allow you to customize the behavior or content of a component. Props are read-only and should not be modified within the child component.

# Using Props in Functional Components

To pass props to a functional component, you can include them as attributes when rendering the component. Here's an example of passing a prop to a functional component:

```javascript
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

In the above example, we have defined a functional component called `Greeting` that accepts a prop called `name`. Within the JSX code, we can access the `name` prop using `props.name` and dynamically display the name.

To use the `Greeting` component with a specific name prop, you can pass it as an attribute when rendering the component:

```javascript
import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="John" />
    </div>
  );
}
```

In the above example, we render the Greeting component with the name prop set to "John". The Greeting component will display "Hello, John!" as its output.

## Default Props

You can also provide default values for props in case they are not passed from the parent component. This can be done using the `defaultProps` property of the functional component. Here's an example:

```javascript
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Greeting.defaultProps = {
  name: "Guest",
};
```

In the above example, if the `name` prop is not provided when rendering the `Greeting` component, it will default to "Guest".
