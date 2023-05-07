import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";

import Button from "../UI/Button";
import classes from "./EditTodo.module.css";

const EditTodo = () => {
  const dispatch = useDispatch();
  const editingTodo = useSelector((state) => state.todos.editingTodo);
  console.log(editingTodo);

  const inputChangeHandler = (event) => {
    dispatch(todoActions.editChangeHandler(event.target.value, editingTodo.id));
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();
    dispatch(todoActions.editTodo(editingTodo));
  };

  return (
    <form className={classes["edit-todo-form"]} onSubmit={submitChangeHandler}>
      <div className={classes["label-wrap"]}>
        <label className={classes.label} htmlFor="edit-todo">
          Edit todo:{" "}
        </label>
        <input
          className={classes.input}
          name="edit-todo"
          type="text"
          onChange={inputChangeHandler}
          value={editingTodo.title}
        />
      </div>
      <div className={classes["buttons-wrap"]}>
        <Button className={classes["save-btn"]} type="submit">
          Save
        </Button>
        <Button className={classes["cancel-btn"]}>Cancel</Button>
      </div>
    </form>
  );
};

export default EditTodo;
