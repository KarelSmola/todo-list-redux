import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";

import { Save, Close } from "../UI/Icons/Icons";
import Button from "../UI/Button";
import classes from "./EditTodo.module.css";

const EditTodo = () => {
  const dispatch = useDispatch();
  const editingTodo = useSelector((state) => state.todos.editingTodo);

  const inputChangeHandler = (event) => {
    dispatch(
      todoActions.editChangeHandler({
        id: editingTodo.id,
        title: event.target.value,
      })
    );
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();
    dispatch(todoActions.saveEditingTodo(editingTodo));
  };

  const cancelForm = () => {
    dispatch(todoActions.cancelEditForm());
  };

  return (
    <Fragment>
      {createPortal(
        <div className={classes.backdrop} />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <form
          className={classes["edit-todo-form"]}
          onSubmit={submitChangeHandler}
        >
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
              <Save />
            </Button>
            <Button className={classes["cancel-btn"]} onClick={cancelForm}>
              <Close />
            </Button>
          </div>
        </form>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default EditTodo;
