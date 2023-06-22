# Handling Events in Functional Components

## Overview

Event handling is an essential aspect of building interactive user interfaces in React.js. Events allow components to respond to user actions, such as button clicks, input changes, and more. In this topic, we will explore event handling in React functional components and learn how to handle various events like onClick, onChange, and more.

## Learning Objectives

By the end of this topic, you will:

- Understand the concept of event handling in React functional components.
- Learn how to handle different events like onClick, onChange, and others in your functional components.

## Event Handling in React

In React, event handling is similar to handling events in standard JavaScript. However, there are a few differences and considerations specific to React. Events in React use camelCase naming convention, and you attach event handlers to JSX elements using props.

## Handling onClick Event

Here's an example of handling the onClick event in a functional component:

```javascript
import React from "react";

function Button() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

In the above example, we define a functional component called `Button` that renders a button element. We attach the `handleClick` function to the onClick event of the button. When the button is clicked, the `handleClick` function is called, and it logs a message to the console.

## Handling onChange Event

Here's an example of handling the onChange event in a functional component:

```javascript
import React, { useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log("value", value); // It will log every state change

  return <input type="text" value={value} onChange={handleChange} />;
}
```

In the above example, we have a functional component called Input that renders an input element. We manage the input's value using the `value` state variable and the `setValue` function from the useState Hook. We attach the `handleChange` function to the onChange event of the input. Whenever the input's value changes, the `handleChange` function is called, and it updates the state with the new value.

## Commonly Used Events

React supports a wide range of events that you can handle in functional components, including onClick, onChange, onSubmit, onFocus, onBlur, and more. You can attach event handlers to different elements and components based on your application's needs.
