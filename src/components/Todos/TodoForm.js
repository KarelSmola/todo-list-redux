import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/todoSlice";

import Button from "../UI/Button";
import classes from "./TodoForm.module.css";

const TodoForm = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Input");
    }, 2000);
    return () => {
      console.log("Cleanup");
      clearTimeout(timer);
    };
  }, [todo]);

  const todoChange = (event) => {
    console.log(event.target.value);
    dispatch(todoActions.todoChangeHandler(event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(
      todoActions.addTodo({ id: Math.random().toString(), title: todo })
    );
    dispatch(todoActions.resetValues());
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["label-wrap"]}>
        <label className={classes.label} htmlFor="todo">
          Todo
        </label>
        <input
          className={classes.input}
          type="text"
          id="todo"
          onChange={todoChange}
          value={todo}
        />
      </div>
      <Button className={classes["add-todo-btn"]} type="submit">
        Add todo
      </Button>
    </form>
  );
};

export default TodoForm;
