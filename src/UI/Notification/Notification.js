import React from "react";
import classes from "./Notification.module.css";
import NotificationElement from "./NotificationElement";

export default function Notification(props) {
  const showTask = () => {
    return props.task.map((el, i) => {
      return (
        <li key={i} >
          <NotificationElement
            userName={el.assignedTo}
            taskName={el.title}
            data={el}
            index={i + 1}
          />
        </li>
      );
    })
  };
  return <ul className={classes.notification}>{showTask()}</ul>;
}
