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

export default function View() {
  const modalData = useSelector((state) => state.modalData[0]);

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
          <p>{modalData.title}</p>
        </div>
        <div className={classes.box}>
          <span>assignedTo:</span>
          <p> {modalData.assignedTo}</p>
        </div>
        <div className={classes.box}>
          <span>duration: </span>
          <p>{modalData.duration}</p>
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
