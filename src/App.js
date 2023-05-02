import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "./store/loginSlice";
import { todoActions } from "./store/todoSlice";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Todos from "./components/Todos/Todos";

let initial = true;

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    if (localStorage.getItem("login")) {
      dispatch(
        loginActions.login({
          userName: localStorage.getItem("login"),
        })
      );
    }
  }, [dispatch]);

  const url =
    "https://todo-list-redux-4c58c-default-rtdb.europe-west1.firebasedatabase.app/todos.json";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      dispatch(todoActions.fetchTodos(data));
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    const sendData = async () => {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(todos),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }
    };

    sendData();
  }, [todos]);

  return (
    <main>
      <Header />
      {!isLoggedIn && <LoginForm />}
      {isLoggedIn && <Todos />}
    </main>
  );
};

export default App;
