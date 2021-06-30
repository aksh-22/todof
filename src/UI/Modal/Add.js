import React, { useState } from "react";
import classes from "./Add.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../Store";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const prior = [
  {
    value: 'High',
    label: '$',
  },
  {
    value: 'Medium',
    label: '€',
  },
  {
    value: 'Low',
    label: '฿',
  },
  {
    value: 'More Prior',
    label: '¥',
  },
];

export default function Add() {
  const [title, setTitle] = useState("");
  const [descrition, setDescrition] = useState("");
  const [date, setDate] = useState("");
  const [assigned, setAssigned] = useState("");
  const [priority, setPriority] = useState(0);
  const [duration, setDuration] = useState(0);

  const dispath = useDispatch();

  const enterName = (e) => {
    setTitle(e.target.value);
  };
  const enterDescrition = (e) => {
    setDescrition(e.target.value);
  };
  const enterDate = (e) => {
    setDate(e.target.value);
  };
  const EnterAssigned = (e) => {
    setAssigned(e.target.value);
  };
  const EnterPriority = (e) => {
    setPriority(e.target.value);
  };
  const EnterDuration = (e) => {
    setDuration(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    dispath(
      dataActions.setTaskTotal({
        id: 8568,
        title: title,
        descrition: descrition,
        assignedDate: date,
        assignedTo: assigned,
        priority: priority,
        duration: duration,
        status: "Pending",
      })
    );
    console.log(title, descrition, date, assigned, priority, duration);
  };

  return (
    <form className={classes.form} onSubmit={addTask}>
      <TextField id="outlined-basic" label="title" variant="outlined" value={title} onChange={enterName} inputProps={{ maxLength: 120, }} />
      <TextField id="outlined-basic" label="descrition" variant="outlined" value={descrition}
        onChange={enterDescrition} />
      <TextField
        id="date"
        label="Deadline"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        value={date}
        onChange={enterDate}

        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField id="outlined-basic" label="Assigned To" variant="outlined" value={assigned} onChange={EnterAssigned} />
      <TextField
        id="standard-select-currency"
        select
        label="Select"
        value={priority}
        onChange={EnterPriority}
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
        label="priority"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={priority}
        onChange={EnterPriority}
        inputProps={{ minLength: 5 }}
      />
      <TextField
        id="outlined-number"
        label="Duration"
        type="number"
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
