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
          <p>{el.points}</p>
        </li>
      );
    });
  useEffect(() => {
    showList();
  }, [points]);

  return <ul className={classes.employee}>{showList()}</ul>;
}
