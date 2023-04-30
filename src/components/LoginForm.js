import React from "react";
import useInput from "../hooks/useInput";

import Button from "./UI/Button";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const {
    inputValue: userName,
    inputChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    inputIsTouched: userNameIsTouched,
    inputIsValid: userNameIsValid,
    inputIsInvalid: userNameIsInvalid,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = (event) => {
    event.preventDefault();

    userNameIsTouched();

    if (!userNameIsValid) {
      return;
    }

    console.log(userName);
  };

  const userNameClasses = userNameIsInvalid
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["label-wrap"]}>
        <label className={classes.label} htmlFor="name">
          User Name
        </label>
        <input
          className={userNameClasses}
          type="text"
          id="name"
          onChange={userNameChangeHandler}
          onBlur={userNameBlurHandler}
        />
      </div>
      <div className={classes["label-wrap"]}>
        <label className={classes.label} htmlFor="password">
          Password
        </label>
        <input className={classes.input} type="password" id="password" />
      </div>
      <Button type="submit" className={classes["login-btn"]}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
