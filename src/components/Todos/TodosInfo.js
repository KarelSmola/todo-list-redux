import React from "react";
import { useSelector } from "react-redux";

import classes from "./TodosInfo.module.css";

const TodosInfo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const userName = useSelector((state) => state.login.userName);

  const todosTodo = todos.length === 1 ? "todo" : "todos";

  return (
    <div className={classes["todos-info-wrap"]}>
      <p className={classes["todos-info"]}>
        {userName}, you have {todos.length} {todosTodo}
      </p>
    </div>
  );
};

export default TodosInfo;
