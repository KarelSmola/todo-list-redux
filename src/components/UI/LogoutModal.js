import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/loginSlice";
import { Transition } from "react-transition-group";

import Button from "./Button";
import classes from "./LogoutModal.module.css";

const animationTimes = {
  enter: 500,
  exit: 1000,
};

const LogoutModal = (props) => {
  const dispatch = useDispatch();

  const finalLogout = () => {
    dispatch(loginActions.finalLogout());
  };

  const cancelLogout = () => {
    dispatch(loginActions.cancelLogout());
  };

  return (
    <Transition
      in={props.show}
      timeout={animationTimes}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        const modalClasses = `${classes["logout-wrap"]} ${
          state === "entering"
            ? classes.showModal
            : state === "exiting"
            ? classes.hideModal
            : null
        }`;
        return (
          <Fragment>
            {createPortal(
              <div className={classes.backdrop} />,
              document.getElementById("backdrop")
            )}
            {createPortal(
              <div className={modalClasses}>
                <h1 className={classes["logout-title"]}>!!! INFO !!!</h1>

                <p className={classes["logout-text"]}>
                  Since this is only test project, all todos will be remove
                  after logout.
                </p>
                <div className={classes["buttons-wrap"]}>
                  <Button className={classes["ok-btn"]} onClick={finalLogout}>
                    OK
                  </Button>
                  <Button
                    className={classes["cancel-btn"]}
                    onClick={cancelLogout}
                  >
                    Cancel
                  </Button>
                </div>
              </div>,
              document.getElementById("modal")
            )}
          </Fragment>
        );
      }}
    </Transition>
  );
};

export default LogoutModal;
