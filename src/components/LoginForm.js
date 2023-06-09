import React from "react";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";

import { LogIn } from "./UI/Icons/Icons";
import Button from "./UI/Button";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    inputValue: userName,
    inputChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    // resetValues: userNameResetValues,
    inputIsValid: userNameIsValid,
    inputIsInvalid: userNameIsInvalid,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: password,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetValues: passwordResetValues,
    inputIsValid: passwordIsValid,
    inputIsInvalid: passwordIsInvalid,
  } = useInput((value) => value.trim().length > 3);

  const submitHandler = (event) => {
    event.preventDefault();

    userNameBlurHandler();
    passwordBlurHandler();

    if (!userNameIsValid || !passwordIsValid) {
      return;
    }

    dispatch(loginActions.login({ userName: userName }));

    // userNameResetValues();
    passwordResetValues();
  };

  const userNameClasses = userNameIsInvalid
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;

  const passwordClasses = passwordIsInvalid
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
          value={userName}
          onChange={userNameChangeHandler}
          onBlur={userNameBlurHandler}
        />
      </div>
      <div className={classes["label-wrap"]}>
        <label className={classes.label} htmlFor="password">
          Password
        </label>
        <input
          className={passwordClasses}
          type="password"
          id="password"
          value={password}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
      </div>
      <Button type="submit" className={classes["login-btn"]}>
        <p className={classes["login-btn-text"]}>Login</p>
        <LogIn />
      </Button>
    </form>
  );
};

export default LoginForm;
