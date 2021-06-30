import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <h1>Todo Extended</h1>
      <nav>
        <NavLink to="/home" activeClassName={classes.active}>
          Home
        </NavLink>
        <NavLink to="/completed" activeClassName={classes.active}>
          Completed
        </NavLink>
        <NavLink to="/pending" activeClassName={classes.active}>
          Pending
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
