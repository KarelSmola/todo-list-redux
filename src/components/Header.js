import React from "react";
import { useSelector } from "react-redux";

import Button from "./UI/Button";
import classes from "./Header.module.css";

const Header = () => {
  const userName = useSelector((state) => state.login.userName);

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>Todo list</div>
        <div className={classes["login-info"]}>
          <h1 className={classes["user-name"]}>User name: {userName}</h1>
          <Button className={classes["logout-btn"]}>Log out</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
