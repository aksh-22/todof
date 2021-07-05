import React, { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import classes from "./EmployeeElement.module.css";

export default function EmployeeElement(props) {
  const [height, setHeight] = useState("3em");
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand(!expand);
  };

  console.log(props.data);

  return (
    <li className={classes.list}
      style={{ height: expand ? `${props.data.points.length * 6}em` : "3em" }}
      key={Math.floor(Math.random() * 10000)}
    >
      <div className={classes.head}>
        <p>{props.data.value}</p>
        <p>
          Total Points : {props.data.points.reduce((total, num) => total + num)}
        </p>
        <IconButton onClick={expandHandler}>
          <ExpandMoreIcon />
        </IconButton>
      </div>
      <ul>
        {props.data.points.map((elP, i2) => (
          <li key={i2 * 10}>
            <p>{elP} : {props.data.taskName}</p>
          </li>
        ))}
      </ul>
    </li>
  );
}
