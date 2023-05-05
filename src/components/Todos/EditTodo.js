import React from "react";

import Button from "../UI/Button";
import classes from "./EditTodo.module.css";

const EditTodo = () => {
  return (
    <form className={classes["edit-todo-form"]}>
      <div className={classes["label-wrap"]}>
        <label className={classes.label} htmlFor="edit-todo">
          Edit todo:{" "}
        </label>
        <input className={classes.input} id="edit-todo" type="text" />
      </div>
      <div className={classes["buttons-wrap"]}>
        <Button className={classes["save-btn"]}>Save</Button>
        <Button className={classes["cancel-btn"]}>Cancel</Button>
      </div>
    </form>
  );
};

export default EditTodo;
