import React, { useState } from "react";
import classes from "./Card.module.css";
import CardElement from "./CardElement";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
// import { useSelector } from "react-redux";

function Card(props) {
  const [cardHeight, setCardHeight] = useState(true);
  const expandHandler = () => {
    setCardHeight(!cardHeight);
  };

  // console.log(props.task);

  const showTask = () => {
    return props.task.length === 0 ? (
      <h1 className={classes.noData}>No Data Found</h1>
    ) : (
      props.task.map((el) => {
        return (
          el.status === props.taskType && (
            <li key={el.id}>
              <CardElement
                name={el.title}
                user={el.assignedTo}
                id={el.id}
                status={el.status}
                data={el}
              />
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
        height: cardHeight ? "2em" : `${props.task.length * 5 + 4}em`,
      }}
    >
      <header className={classes.header} onClick={expandHandler}>
        <h3>{props.taskType} Task</h3>
        <h3> {props.task.length} </h3>
      </header>
      <ul>{showTask()}</ul>
      {props.task.length >= 0 && (
        <footer
          className={classes.footer}
          onClick={expandHandler}
          style={{
            transform: cardHeight ? "rotateX(180deg)" : "rotateX(0deg)",
          }}
        >
          <ExpandLessOutlinedIcon />
        </footer>
      )}
    </div>
  );
}

export default Card;
