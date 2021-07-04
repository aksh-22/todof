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

  let userName;
  if (props.data.assignedTo) {
    userName = props.data.assignedTo;
    if (userName.length > 10) {
      userName = `${userName.substring(0, 10)}...`;
    }
  }
  let taskName = props.data.title;
  if (taskName.length > 10) {
    taskName = `${taskName.substring(0, 10)}...`;
  }

  console.log(props.data)

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
      className={`${classes.notificationElement} ${active && classes.active}
       ${props.data.status === 'Overdue' && classes.overDue}`}
      onClick={modalHandler}
    // style={{ backgroundColor: 'red' }}
    >
      <p>{taskName}</p>
      <span>-{userName}</span>
    </div>
  );
}
