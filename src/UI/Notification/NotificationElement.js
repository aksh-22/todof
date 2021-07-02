import React, { useEffect } from "react";
import classes from "./NotificationElement.module.css";
import { useDispatch } from "react-redux";
import { dataActions } from "../../Store";
import { useState } from "react";

export default function NotificationElement(props) {
  const dispath = useDispatch();
  const [active, setActive] = useState(false);

  const modalHandler = () => {
    dispath(dataActions.setModalActive());
    dispath(
      dataActions.setModalData({
        data: props.data,
        modalType: "view",
      })
    );
  };

  useEffect(() => {
    const addClass = setTimeout(() => {
      setActive(true);
    }, 80 * props.index);
    const removeClass = setTimeout(() => {
      setActive(false);
    }, 3000 + props.index * 1000);
  }, []);

  return (
    <div
      className={`${classes.notificationElement} ${active && classes.active}`}
      onClick={modalHandler}
    >
      <p>{props.taskName}</p>
      <span>-{props.userName}</span>
    </div>
  );
}
