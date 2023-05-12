import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/loginSlice";
import { Transition } from "react-transition-group";

import Button from "./Button";
import classes from "./LogoutModal.module.css";

const LogoutModal = (props) => {
  const dispatch = useDispatch();

  const finalLogout = () => {
    dispatch(loginActions.finalLogout());
  };

  const cancelLogout = () => {
    dispatch(loginActions.cancelLogout());
  };

  return (
    <Transition in={props.show} timeout={500} mountOnEnter unmountOnExit>
      {(state) => {
        const lougoutModalClasses = `${classes["logout-wrap"]} ${
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
              <div className={lougoutModalClasses}>
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
