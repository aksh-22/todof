import React, { useState } from "react";
import classes from "./Add.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../Store";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
// import { KeyboardDatePicker } from "@material-ui/pickers";

const prior = [
  {
    value: "High",
  },
  {
    value: "Medium",
  },
  {
    value: "Low",
  },
  {
    value: "More Prior",
  },
];

const assign = [
  {
    value: "Akash",
  },
  {
    value: "Mike",
  },
  {
    value: "Vinay",
  },
  {
    value: "Kapil",
  },
];

export default function Add() {
  const [title, setTitle] = useState("");
  const [descrition, setDescrition] = useState("");
  const [date, setDate] = useState("");
  const [assigned, setAssigned] = useState("");
  const [priority, setPriority] = useState("");
  const [duration, setDuration] = useState(0);

  const [titleErr, setTitleErr] = useState(false);
  const [descritionErr, setDescritionErr] = useState(false);
  const [dateErr, setDateErr] = useState(false);
  const [assignedErr, setAssignedErr] = useState(false);
  const [priorityErr, setPriorityErr] = useState(false);
  const [durationErr, setDurationErr] = useState(false);

  const taskId = useSelector((state) => state.taskId);

  const dispath = useDispatch();
  // const currDat = Date.now();
  // const days = currDat.getDays();

  const enterName = (e) => {
    const regex = /^[A-Za-z0-9 ]+$/;
    const isValid = regex.test(e.target.value);
    if (!isValid) {
      alert("Special Characters are not allowed");
      return;
    } else {
      setTitleErr(false);
      setTitle(e.target.value);
    }
  };
  const enterDescrition = (e) => {
    const regex = /^[A-Za-z0-9 ]+$/;
    const isValid = regex.test(e.target.value);
    if (!isValid) {
      alert("Special Characters are not allowed");
      return;
    } else {
      setAssignedErr(false);
      setDescrition(e.target.value);
    }
  };
  const enterDate = (e) => {
    setDateErr(false);
    console.log(parseInt(e.target.value.split("-").join("")));
    setDate(e.target.value);
  };
  const EnterAssigned = (e) => {
    setAssignedErr(false);
    setAssigned(e.target.value);
  };
  const EnterPriority = (e) => {
    setPriorityErr(false);
    setPriority(e.target.value);
  };
  const EnterDuration = (e) => {
    setDurationErr(false);
    setDuration(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (
      title.trim("").length === 0 ||
      descrition.trim("").length === 0 ||
      date.split("").length === 0 ||
      assigned.trim().length === 0 ||
      priority.trim("").length === 0 ||
      duration <= 0 ||
      duration >= 30
    ) {
      if (title.trim("").length === 0) {
        setTitleErr(true);
      } else if (descrition.trim("").length === 0) {
        setDescritionErr(true);
        return;
      } else if (date.split().length === 0) {
        setDateErr(true);
        return;
      } else if (assigned.trim().length === 0) {
        setAssignedErr(true);
        return;
      } else if (priority.trim().length === 0) {
        setPriorityErr(true);
        return;
      } else if (duration <= 0 || duration >= 30) {
        setDurationErr(true);
        return;
      }
      return;
    }
    dispath(
      dataActions.setTaskTotal({
        id: taskId,
        title: title,
        descrition: descrition,
        assignedDate: date,
        assignedTo: assigned,
        priority: priority,
        duration: duration,
        status: "Pending",
      })
    );
    dispath(dataActions.setModalActive());
  };

  return (
    <form className={classes.form} onSubmit={addTask}>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        value={title}
        onChange={enterName}
        inputProps={{ maxLength: 100 }}
        className={`${titleErr && classes.error}`}
        helperText={titleErr && "Please provide task title"}
      />
      <TextField
        id="outlined-basic"
        label="descrition"
        variant="outlined"
        value={descrition}
        inputProps={{ maxLength: 300 }}
        onChange={enterDescrition}
        className={`${descritionErr && classes.error}`}
        helperText={descritionErr && "Please provide task description"}
      />
      {/* <TextField
        id="date"
        label="Deadline"
        type="date"
        // defaultValue="2017-05-24"
        variant="outlined"
        className={classes.textField}
        value={date}
        onChange={enterDate}
        minDate={new Date("06-06-2020")}
        className={`${dateErr && classes.error}`}
        helperText={dateErr && "Please select a date"}
        InputLabelProps={{
          shrink: true,
        }}
      /> */}

      <label>
        <input
          type="date"
          value={date}
          onChange={enterDate}
          min="2021-07-02"
          // className={`${dateErr && classes.error}`}
          // style={
          //   dateErr ? { border: "1px solid red" } : { border: "1px solid black" }
          // }
          style={{ border: dateErr ? "1px solid red" : "1px solid black" }}
        />
        {dateErr ? (
          <p style={{ fontSize: ".5em", color: "red" }}>select date</p>
        ) : (
          <p style={{ fontSize: ".5em" }}>select date</p>
        )}
      </label>
      <TextField
        id="outlined-basic"
        select
        label="Assigned To"
        variant="outlined"
        value={assigned}
        onChange={EnterAssigned}
        className={`${assignedErr && classes.error}`}
        helperText={
          assignedErr && "Please provide a name of assigned person's name"
        }
      >
        {assign.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="standard-select"
        select
        label="Select"
        value={priority}
        onChange={EnterPriority}
        className={`${priorityErr && classes.error}`}
        variant="outlined"
        helperText="Please select priority of task"
      >
        {prior.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-number"
        label="Duration"
        type="number"
        className={`${durationErr && classes.error}`}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={duration}
        onChange={EnterDuration}
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        Submit
      </Button>
    </form>
  );
}
