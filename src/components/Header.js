import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";

import { LogOut } from "./UI/Icons/Icons";
import Button from "./UI/Button";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.login.userName);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const logoutHandler = () => {
    dispatch(loginActions.logout());
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>Todo list</div>
        {isLoggedIn && (
          <div className={classes["login-info"]}>
            <div className={classes["user-name-wrap"]}>
              <h2 className={classes["user-name-title"]}>User name:</h2>
              <p className={classes["user-name"]}>{userName}</p>
            </div>
            <Button className={classes["logout-btn"]} onClick={logoutHandler}>
              <p className={classes["logout-btn-text"]}>Logout</p> <LogOut />
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
