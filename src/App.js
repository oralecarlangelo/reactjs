import React from "react";
import Greeting from "./Greeting";
import TodoList from "./TodoList";
import ConditionalTodoList from "./ConditionalTodoList";

function App() {
  const todos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React application", completed: false },
    { id: 3, text: "Deploy to production", completed: true },
  ];

  const isLoggedIn = true;

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      <TodoList todos={todos} />
      <ConditionalTodoList todos={todos} />
    </div>
  );
}

export default App;
