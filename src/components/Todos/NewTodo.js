import React from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";

import Button from "../UI/Button";
import classes from "./NewTodo.module.css";

const NewTodo = ({ id, title }) => {
  const dispatch = useDispatch();

  const removeTodo = (id) => {
    dispatch(todoActions.removeTodo(id));
  };

  return (
    <li className={classes.todo} key={id}>
      <h1 className={classes.title}>{title}</h1>
      <Button
        className={classes["todo-btn"]}
        onClick={() => {
          removeTodo(id);
        }}
      >
        Remove todo
      </Button>
    </li>
  );
};

export default NewTodo;
