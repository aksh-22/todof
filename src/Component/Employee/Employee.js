import React, { useEffect } from "react";
import classes from "./Employee.module.css";
import { useSelector } from "react-redux";

export default function Employee() {
  const points = useSelector((state) => state.employeePoints);

  const showList = () =>
    points.map((el) => {
      return (
        <li key={el.value}>
          <p>{el.value}</p>
          <ul>
            {el.points.map((elP) => (
              <li key={Math.floor(el.value * Math.random * 10000)}>{elP}</li>
            ))}
          </ul>
        </li>
      );
    });
  useEffect(() => {
    showList();
  }, [points]);

  return <ul className={classes.employee}>{showList()}</ul>;
}
