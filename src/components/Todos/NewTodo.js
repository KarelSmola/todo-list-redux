import React from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";

import Button from "../UI/Button";
import classes from "./NewTodo.module.css";

const NewTodo = ({ id, title }) => {
  const dispatch = useDispatch();

  const editTodo = (todo) => {
    dispatch(todoActions.editTodoForm(todo));
  };

  const removeTodo = (id) => {
    dispatch(todoActions.removeTodo(id));
  };

  return (
    <li className={classes.todo} key={id}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes["buttons-wrap"]}>
        <Button
          className={classes["edit-btn"]}
          onClick={() => {
            editTodo({ id, title });
          }}
        >
          Edit
        </Button>
        <Button
          className={classes["remove-btn"]}
          onClick={() => {
            removeTodo(id);
          }}
        >
          Remove todo
        </Button>
      </div>
    </li>
  );
};

export default NewTodo;
