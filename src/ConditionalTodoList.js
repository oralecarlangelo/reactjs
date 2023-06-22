import React from "react";

function ConditionalTodoList(props) {
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
export default ConditionalTodoList;
