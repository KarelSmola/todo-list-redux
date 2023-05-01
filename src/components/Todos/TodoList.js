import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";
import NewTodo from "./NewTodo";

import classes from "./TodoList.module.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const url =
    "https://todo-list-redux-4c58c-default-rtdb.europe-west1.firebasedatabase.app/todos.json";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      dispatch(todoActions.fetchTodos(data));
    };
    fetchData();
  }, [dispatch]);

  return (
    <ul className={classes["todo-list"]}>
      {todos.map((todo) => (
        <NewTodo id={todo.id} key={todo.id} title={todo.title} />
      ))}
    </ul>
  );
};

export default TodoList;
