import React from "react";
import { useSelector } from "react-redux";
import NewTodo from "./NewTodo";

import classes from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className={classes["todo-list"]}>
      {todos.map((todo) => (
        <NewTodo id={todo.id} key={todo.id} title={todo.title} />
      ))}
    </ul>
  );
};

export default TodoList;
