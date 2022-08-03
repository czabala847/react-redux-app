import React from "react";

import "./App.css";
import { useGetTodosQuery } from "./store/apis/todoApi";

export const TodoApp: React.FC = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery("");

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading {isLoading ? "True" : "False"}</h4>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}> {todo.title} </li>;
        })}
      </ul>
      <button>Next Todo</button>
    </>
  );
};
