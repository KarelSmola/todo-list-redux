import React from "react";

import Button from "./UI/Button";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["label-wrap"]}>
        <label className={classes.label} htmlFor="name">
          User Name
        </label>
        <input className={classes.input} type="text" id="name" />
      </div>
      <div className={classes["label-wrap"]}>
        <label className={classes.label} htmlFor="password">
          Password
        </label>
        <input className={classes.input} type="password" id="password" />
      </div>
      <Button type="submit" className={classes["login-btn"]}>Login</Button>
    </form>
  );
};

export default LoginForm;
