import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Todos from "./components/Todos/Todos";

const App = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <main>
      {isLoggedIn && <LoginForm />}
      {!isLoggedIn && <Header />}
      {!isLoggedIn && <Todos />}
    </main>
  );
};

export default App;
