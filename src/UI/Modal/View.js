import React from "react";
import { useSelector } from "react-redux";
import classes from "./View.module.css";

export default function View() {
  const modalData = useSelector((state) => state.modalData[0]);

  return (
    <div className={classes.view}>
      <div className={classes.box}>
        <span>Task Title : </span>
        <p>{modalData.title}</p>
      </div>
      <div className={classes.box}>
        <span>assignedTo:</span>
        <p> {modalData.assignedTo}</p>
      </div>

      <div className={classes.box}>
        <span>duration: </span>
        <p>{modalData.duration}</p>
      </div>
      <div className={classes.box}>
        <span>priority: </span>
        <p>{modalData.priority}</p>
      </div>
      <div className={classes.box}>
        <span>status: </span>
        <p>{modalData.status}</p>
      </div>
      <div className={classes.box}>
        <span>Assigned Date: </span>
        <p>{modalData.assignedDate}</p>
      </div>
      <div className={classes.box}>
        <span>descrition: </span>
        <p>{modalData.descrition}</p>
      </div>
    </div>
  );
}
