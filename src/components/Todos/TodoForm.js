// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/todoSlice";

import Button from "../UI/Button";
import classes from "./TodoForm.module.css";

const TodoForm = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  const todos = useSelector((state) => state.todo.todos);

  const todoChange = (event) => {
    dispatch(todoActions.todoChangeHandler(event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(todoActions.addTodo({ title: todo }));
    dispatch(todoActions.resetValues());
  };
  console.log(todos);
  return (
    <form onSubmit={submitHandler}>
      <div className={classes["label-wrap"]}>
        <label htmlFor="todo">Todo</label>
        <input type="text" id="todo" onChange={todoChange} value={todo} />
        <Button type="submit">Add todo</Button>
      </div>
    </form>
  );
};

export default TodoForm;
