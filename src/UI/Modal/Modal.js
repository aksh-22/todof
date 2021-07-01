import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../Store";
import Add from "./Add";
import View from "./View";

const Modal = () => {
  const dispath = useDispatch();
  const modalType = useSelector((state) => state.modalTypeAdd);
  // const modalData = useSelector((state) => state.modalData);

  const modalHandler = () => {
    dispath(dataActions.setModalActive());
  };
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={modalHandler}></div>
      {modalType ? (
        <div className={classes.modalAdd}>
          <div className={classes.content}>
            <Add />
          </div>
        </div>
      ) : (
        <div className={classes.modalView}>
          <div className={classes.content}>
            <View />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
