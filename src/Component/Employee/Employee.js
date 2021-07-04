import React, { useEffect } from "react";
import classes from "./Employee.module.css";
import { useSelector } from "react-redux";

export default function Employee() {
  const points = useSelector((state) => state.employeePoints);


  const showList = () =>
    points.map((el, i) => {
      return (
        <li key={el.i}>
          <p>{el.value}</p>
          <ul>
            {el.points.map((elP) => (
              <li key={i * 10}>{elP}</li>
            ))}
            <li key={i * 300} style={{ fontWeight: "600" }}>
              total: {el.points.reduce((total, num) => total + num)}
            </li>
          </ul>
        </li>
      );
    });
  useEffect(() => {
    showList();
  }, [points]);

  return <ul className={classes.employee}>{showList()}</ul>;
}
