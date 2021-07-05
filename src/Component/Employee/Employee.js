import React, { useEffect, useState } from "react";
import classes from "./Employee.module.css";
import { useSelector } from "react-redux";

import EmployeeElement from "./EmployeeElement";

export default function Employee() {
  const points = useSelector((state) => state.employeePoints);
  const tasks = useSelector((state) => state.taskTotal);
  const [height, setHeight] = useState("3em");

  console.log(points)

  const expandHandler = (h) => {
    console.log(h);
    setHeight(`${h * 3}em`);
  };

  const showList = () =>
    points.map((el, i) => {
      return <EmployeeElement data={el} key={i} />;
    });
  useEffect(() => {
    showList();
  }, [points]);

  return <ul className={classes.employee}>{showList()}</ul>;
}
