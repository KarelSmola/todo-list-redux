import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "./store/loginSlice";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Todos from "./components/Todos/Todos";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  if (localStorage.getItem("login")) {
    dispatch(
      loginActions.login({
        userName: localStorage.getItem("login"),
      })
    );
  }

  return (
    <main>
      <Header />
      {!isLoggedIn && <LoginForm />}
      {isLoggedIn && <Todos />}
    </main>
  );
};

export default App;
