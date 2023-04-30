import React from "react";
import { useSelector } from "react-redux";

import classes from "./Header.module.css";

const Header = () => {
  const userName = useSelector((state) => state.login.userName);
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div>
      <h1>Hello {userName}</h1>
      <p className={classes["todos-amount"]}>
        You have got {todos.length} todos
      </p>
    </div>
  );
};

export default Header;
