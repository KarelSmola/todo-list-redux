import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import TodoForm from "./components/Todos/TodoForm";

const App = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <main>
      {isLoggedIn && <LoginForm />}
      {!isLoggedIn && <Header />}
      {!isLoggedIn && <TodoForm />}
    </main>
  );
};

export default App;
