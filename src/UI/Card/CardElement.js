import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import classes from "./CardElement.module.css";
import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import DoneSharpIcon from "@material-ui/icons/DoneSharp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../Store/index";

export default function CardElement(props) {
  const [check, setCheck] = useState(false);
  const dispath = useDispatch();

  const checkHandler = () => {
    setCheck(true);
  };

  const modalHandler = () => {
    dispath(dataActions.setModalActive());
    dispath(
      dataActions.setModalData({
        data: { name: props.name, user: props.user },
        modalType: "view",
      })
    );
  };

  return (
    <div className={`${classes.element} ${check && classes.checked}`}>
      <div className={classes.details}>
        <Avatar aria-label="recipe" className={classes.avatar}>
          {props.user.charAt(0)}
        </Avatar>
        {props.name}
      </div>
      <span className={classes.user}>-{props.user} Khnadewal</span>
      <div className={classes.more} onClick={modalHandler}>
        <MoreHorizIcon />
      </div>
      <div className={classes.checkBox} onClick={checkHandler}>
        <CheckBoxOutlineBlankSharpIcon />
        {check && <DoneSharpIcon />}
      </div>
    </div>
  );
}
