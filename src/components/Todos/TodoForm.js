import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/todoSlice";

import { Add } from "../UI/Icons/Icons";
import Button from "../UI/Button";
import classes from "./TodoForm.module.css";

const TodoForm = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  const inputIsTouched = useSelector((state) => state.todos.todoInputIsTouched);
  const todoInput = useSelector((state) => state.todos.todoInput);

  useEffect(() => {
    const timer = setTimeout(() => {}, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [todo]);

  const todoChange = (event) => {
    dispatch(todoActions.todoChangeHandler(event.target.value));
  };

  const todoBlur = () => {
    dispatch(todoActions.todoBlurHandler());
  };

  const validTodo = todoInput.trim() !== "";
  const invalidTodo = !validTodo && inputIsTouched;

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(todoActions.todoBlurHandler());

    if (!validTodo) {
      return;
    }

    dispatch(
      todoActions.addTodo({ id: Math.random().toString(), title: todo })
    );
    dispatch(todoActions.resetValues());
  };

  const todoInputClasses = invalidTodo
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["label-wrap"]}>
        <label className={classes.label} htmlFor="todo">
          Todo
        </label>
        <input
          className={todoInputClasses}
          type="text"
          id="todo"
          onChange={todoChange}
          onBlur={todoBlur}
          value={todo.title}
        />
      </div>
      <Button className={classes["add-todo-btn"]} type="submit">
        <Add />
      </Button>
    </form>
  );
};

export default TodoForm;
