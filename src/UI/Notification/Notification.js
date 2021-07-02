import React, { useState } from "react";
import classes from "./Notification.module.css";
import NotificationElement from "./NotificationElement";

export default function Notification(props) {
  const showTask = () => {
    return props.task.length === 0 ? (
      <h1></h1>
    ) : (
      props.task.map((el, i) => {
        return (
          <li key={el.id}>
            <NotificationElement
              userName={el.assignedTo}
              taskName={el.title}
              data={el}
              index={i + 1}
            />
          </li>
        );
      })
    );
  };
  return <ul className={classes.notification}>{showTask()}</ul>;
}
