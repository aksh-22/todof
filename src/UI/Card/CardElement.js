import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import classes from "./CardElement.module.css";
import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import DoneSharpIcon from "@material-ui/icons/DoneSharp";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import { dataActions } from "../../Store/index";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Paper from "@material-ui/core/Paper";

export default function CardElement(props) {
  const [check, setCheck] = useState(false);
  const [abs, setAbs] = useState(false);
  const dispath = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let userName;

  if (props.data.assignedTo) {
    userName = props.data.assignedTo;
    if (userName.length > 10) {
      userName = `${userName.substring(0, 10)}...`;
    }
  }
  let taskName = props.data.title;
  if (taskName.length > 10) {
    taskName = `${taskName.substring(0, 10)}...`;
  }

  const checkHandler = () => {
    // const confirm = window.confirm("Have you completed this task?");
    // if (confirm) {
    // }
    setOpen(false);
    setCheck(true);
    setTimeout(() => {
      setAbs(true);
    }, 500);
    dispath(dataActions.setTaskStatus(props.id));
  };

  const modalHandler = () => {
    dispath(dataActions.setModalActive());
    dispath(
      dataActions.setModalData({
        data: props.data,
        modalType: "view",
      })
    );
  };

  return (
    <Paper
      elevation={3}
      className={`${classes.element} ${check && classes.checked} ${abs && classes.abs
        }`}
    >
      {/* <div
        className={`${classes.element} ${check && classes.checked} ${
          abs && classes.abs
        }`}
      > */}
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Task completion?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Have you completed "{taskName}" task ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            no
          </Button>
          <Button onClick={checkHandler} color="primary" autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
      <div className={classes.details}>
        {props.data.assignedTo && (
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.data.assignedTo && props.data.assignedTo.charAt(0)}
          </Avatar>
        )}
        {taskName}
      </div>
      <span className={classes.user}>-{props.data.assignedTo && userName}</span>
      {/* <div className={classes.more} onClick={handleClickOpen}> */}
      <div className={classes.more} onClick={modalHandler}>
        <VisibilityIcon />
        {/* <MoreHorizIcon /> */}
      </div>
      {props.status !== "Completed" && (
        <div className={classes.checkBox} onClick={handleClickOpen}>
          <CheckBoxOutlineBlankSharpIcon />
          {check && <DoneSharpIcon />}
        </div>
      )}
      {/* </div> */}
    </Paper>
  );
}
