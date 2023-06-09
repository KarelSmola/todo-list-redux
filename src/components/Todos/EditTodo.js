import React, { Fragment } from "react";
import { Transition } from "react-transition-group";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";

import { Save, Close } from "../UI/Icons/Icons";
import Button from "../UI/Button";
import classes from "./EditTodo.module.css";

const animationTimes = {
  enter: 500,
  exit: 1000,
};

const EditTodo = (props) => {
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
    <Transition
      in={props.show}
      timeout={animationTimes}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        const formClasses = `${classes["edit-todo-form"]} ${
          state === "entering"
            ? classes.showEditForm
            : state === "exiting"
            ? classes.hideEditForm
            : null
        }`;

        return (
          <Fragment>
            {createPortal(
              <div className={classes.backdrop} />,
              document.getElementById("backdrop")
            )}
            {createPortal(
              <form className={formClasses} onSubmit={submitChangeHandler}>
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
                  <Button
                    className={classes["cancel-btn"]}
                    onClick={cancelForm}
                  >
                    <Close />
                  </Button>
                </div>
              </form>,
              document.getElementById("modal")
            )}
          </Fragment>
        );
      }}
    </Transition>
  );
};

export default EditTodo;
