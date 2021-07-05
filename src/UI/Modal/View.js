import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./View.module.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { dataActions } from "../../Store";
import Tooltip from "@material-ui/core/Tooltip";

export default function View() {
  const modalData = useSelector((state) => state.modalData[0]);

  let title = modalData.title;
  if (title.length > 10) {
    title = `${title.substring(0, 7)}...`;
  }

  const yearC = new Date().getUTCFullYear();
  let monthC = new Date().getMonth() + 1;
  if (monthC < 10) {
    monthC = `0${monthC}`;
  }
  let dateC = new Date().getDate();
  if (dateC < 10) {
    dateC = `0${dateC}`;
  }
  const time = `${yearC}-${monthC}-${dateC}`;

  let duration = 0;
  const assignedDateArr = modalData.assignedDate.split("-");
  // console.log(parseInt(dateC));
  console.log(parseInt(monthC));
  console.log(parseInt(assignedDateArr[1]));
  // console.log(parseInt(assignedDateArr[2]));
  const a = parseInt(assignedDateArr[1]);
  const b = parseInt(monthC);
  const aVal = parseInt(assignedDateArr[2]);
  const bVal = parseInt(dateC);
  console.log(a, b);
  console.log(a === b);
  console.log(parseInt(assignedDateArr)[1] === parseInt(monthC));
  if (a === b) {
    console.log("object");
    duration = aVal - bVal;
  }

  // const [check, setCheck] = useState(false);
  // const [abs, setAbs] = useState(false);
  const dispath = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // let userName;

  const checkHandler = () => {
    // const confirm = window.confirm("Have you completed this task?");
    // if (confirm) {
    // }
    setOpen(false);
    // setCheck(true);
    setTimeout(() => {
      // setAbs(true);
    }, 500);
    dispath(dataActions.setTaskStatus(modalData.id));
  };

  return (
    <Fragment>
      <div className={classes.view}>
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
              Have you completed "{modalData.title}" task ?
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
        <div className={classes.box}>
          <span>Task Title : </span>
          <Tooltip title={modalData.title}>
            <p>{title}</p>
          </Tooltip>
        </div>
        <div className={classes.box}>
          <span>assignedTo:</span>
          <p> {modalData.assignedTo}</p>
        </div>
        <div className={classes.box}>
          <span>duration: </span>
          <p>{duration}</p>
        </div>
        <div className={classes.box}>
          <span>priority: </span>
          <p>{modalData.priority}</p>
        </div>
        <div className={classes.box}>
          <span>status: </span>
          <p>{modalData.status}</p>
        </div>
        <div className={classes.box}>
          <span>Assigned Date: </span>
          <p>{modalData.assignedDate}</p>
        </div>
        <div className={classes.box}>
          <span>descrition: </span>
          <p>{modalData.descrition}</p>
        </div>
      </div>
      {modalData.status !== "Completed" && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          className={classes.btn}
        >
          Completed?
        </Button>
      )}
    </Fragment>
  );
}
