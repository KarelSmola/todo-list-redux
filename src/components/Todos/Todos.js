import React from "react";
import TodosInfo from "./TodosInfo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import classes from "./Todos.module.css";

const Todos = () => {
  return (
    <div className={classes.todos}>
      <TodosInfo />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todos;
