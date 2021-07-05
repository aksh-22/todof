import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <h3>Todo Extended</h3>
      <nav>
        <NavLink to="/home" activeClassName={classes.active}>
          Home
        </NavLink>
        <NavLink to="/home2" activeClassName={classes.active}>
          Home2
        </NavLink>
        <NavLink to="/completed" activeClassName={classes.active}>
          Completed
        </NavLink>
        <NavLink to="/pending" activeClassName={classes.active}>
          Pending
        </NavLink>
        <NavLink to="/employee" activeClassName={classes.active}>
          Employees
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
