import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "./store/loginSlice";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Todos from "./components/Todos/Todos";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const todos = useSelector((state) => state.todos.todos);

  const url =
    "https://todo-list-redux-4c58c-default-rtdb.europe-west1.firebasedatabase.app/todos.json";

  if (localStorage.getItem("login")) {
    dispatch(
      loginActions.login({
        userName: localStorage.getItem("login"),
      })
    );
  }

  useEffect(() => {
    const sendData = async () => {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(todos),
      });
      console.log(response);
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
