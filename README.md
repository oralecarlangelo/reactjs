# Conditional and List Rendering

## Overview

Conditional rendering and list rendering are essential techniques in React.js that allow components to display different content based on certain conditions or render lists of data dynamically. In this topic, we will explore how to conditionally render elements and render lists of data in React functional components.

## Learning Objectives

By the end of this topic, you will:

- Understand how to conditionally render elements in React functional components.
- Learn how to render lists of data dynamically in React functional components.

## Conditional Rendering

Conditional rendering in React enables components to display different content based on specific conditions. You can use JavaScript expressions or conditional operators to determine what content to render. Here's an example:

```javascript
import React from "react";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}</div>
  );
}
```

`In the above example, the Greeting component conditionally renders a different message based on the value of the isLoggedIn prop. If isLoggedIn is true, it displays "Welcome back!" as an <h1> element. Otherwise, it displays "Please log in." as an <h1> element.`

## List Rendering

List rendering in React allows you to dynamically render lists of data, such as arrays or object properties. You can use the map() method to iterate over the data and generate the list of elements. Here's an example:

```javascript
import React from "react";

function TodoList(props) {
  const todos = props.todos;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

`In the above example, the TodoList component renders a list of todos based on the todos prop. The map() method is used to iterate over each todo item in the todos array and generate a <li> element for each item. Each <li> element has a unique key attribute set to the id of the todo item, and the text of the todo is displayed as the content of the element.`

## Conditional List Rendering

You can combine conditional rendering and list rendering to handle more complex scenarios. For example, you can conditionally render certain list items based on specific conditions. Here's an example:

```javascript
import React from "react";

function TodoList(props) {
  const todos = props.todos;
  const filter = props.filter;

  return (
    <ul>
      {todos.map((todo) =>
        filter === "completed" && !todo.completed ? null : (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        )
      )}
    </ul>
  );
}
```

In the above example, the `TodoList` component conditionally renders each todo item based on the value of the `filter` prop. If the `filter` prop is set to 'completed' and the `todo` is not completed, the list item is not rendered. Otherwise, the list item is rendered with the appropriate styling based on the `completed` property of the todo.
