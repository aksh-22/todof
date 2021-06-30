import React, { useState } from "react";
import classes from "./Add.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../Store";

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
      <label>
        Title:
        <input type="text" name="Title" value={title} onChange={enterName} />
      </label>
      <label>
        Descrition:
        <input
          type="text"
          name="Descrition"
          value={descrition}
          onChange={enterDescrition}
        />
      </label>
      <label>
        Date:
        <input type="date" name="Date" value={date} onChange={enterDate} />
      </label>
      <label>
        Assigned To:
        <input
          type="text"
          name="Assigned"
          value={assigned}
          onChange={EnterAssigned}
        />
      </label>
      <label>
        Priority:
        <input
          type="number"
          name="Priority"
          value={priority}
          onChange={EnterPriority}
        />
      </label>
      <label>
        Duration:(In Days)
        <input
          type="number"
          name="Duration"
          value={duration}
          onChange={EnterDuration}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
