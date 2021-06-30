import React, { useState, useEffect } from "react";
import classes from "./Card.module.css";
import CardElement from "./CardElement";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import { useSelector } from "react-redux";

function Card(props) {
  const [cardHeight, setCardHeight] = useState(true);

  const tasks = useSelector((state) => state.taskTotal);

  const expandHandler = () => {
    setCardHeight(!cardHeight);
  };

  useEffect(() => {
    showTask();
  }, [tasks]);

  const showTask = () => {
    return props.task.length === 0 ? (
      <h1>No Data Found</h1>
    ) : (
      tasks.map((el) => {
        return (
          el.status === props.taskType && (
            <li key={el.id}>
              <CardElement name={el.title} user={el.assignedTo} />
            </li>
          )
        );
      })
    );
  };

  return (
    <div
      className={classes.card}
      style={{
        background: props.bgColor,
        height: cardHeight ? "15em" : "auto",
      }}
    >
      <header className={classes.header}>
        <h3>{props.taskType} Task</h3>
      </header>
      <ul>{showTask()}</ul>
      {/* {taskLength > 1 && (
        <footer
          className={classes.footer}
          onClick={expandHandler}
          style={{ transform: cardHeight ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ExpandLessOutlinedIcon />
        </footer>
      )} */}
      <footer
        className={classes.footer}
        onClick={expandHandler}
        style={{ transform: cardHeight ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        <ExpandLessOutlinedIcon />
      </footer>
    </div>
  );
}

export default Card;
