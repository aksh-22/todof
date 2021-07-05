import React, { useState, useEffect } from "react";
import Card from "./../../UI/Card/Card";
import classes from "./Completed.module.css";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";

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

function Completed() {
  const tasks = useSelector((state) => state.taskTotal);

  const [completedTask, setCompletedTask] = useState([]);

  const [date, setDate] = useState("");
  const [dateOne, setDateOne] = useState(0);
  const [dateTwo, setDateTwo] = useState(0);
  const [assigned, setAssigned] = useState(assign[0].value);
  const [priority, setPriority] = useState(prior[0].value);

  const [filterType, setFilterType] = useState("assignedTo");
  const [filterVal, setFilterVal] = useState("Akash");
  const [dateRangeErr, setDateRangeErr] = useState(false);

  const yearC = new Date().getUTCFullYear();
  let monthC = new Date().getMonth() + 1;
  if (monthC < 10) {
    monthC = `0${monthC}`;
  }
  let dateC = new Date().getDate();
  if (dateC < 10) {
    dateC = `0${dateC}`;
  }
  const time1 = `${yearC}-${monthC}-${dateC}`;
  // const time2 = `${yearC}-${monthC}-${dateC + 1}`;

  const [init, setInit] = useState(true);
  useEffect(() => {
    setCompletedTask([]);
    tasks.forEach((el) => {
      if (init) {
        if (el.status === "Completed") {
          setCompletedTask((prev) => {
            const newArr = [...prev, el];
            setInit(false);
            return newArr;
          });
        }
        return;
      } else if (filterType === "assignedTo") {
        if (el.status === "Completed" && el.assignedTo === filterVal) {
          setCompletedTask((prev) => {
            const newArr = [...prev, el];
            return newArr;
          });
        }
      } else if (filterType === "priority") {
        if (el.status === "Completed" && el.priority === filterVal) {
          setCompletedTask((prev) => {
            const newArr = [...prev, el];
            return newArr;
          });
        }
      } else if (filterType === "date") {
        if (
          el.status === "Completed" &&
          el.assignedDate.split("-").join("") === filterVal
        ) {
          setCompletedTask((prev) => {
            const newArr = [...prev, el];
            return newArr;
          });
        }
      } else if (filterType === "rangeDate") {
        if (
          (el.status === "Completed" &&
            dateOne.split("-").join("") * 1 <
              el.assignedDate.split("-").join("") * 1) ||
          el.assignedDate.split("-").join("") * 1 >
            dateTwo.split("-").join("") * 1
        ) {
          setCompletedTask((prev) => {
            const newArr = [...prev, el];
            return newArr;
          });
        }
      }
    });
  }, [filterType, filterVal, tasks]);

  const enterDate = (e) => {
    // setDateErr(false);
    setDate(e.target.value);
    const dateV = e.target.value.split("-").join("");
    setFilterType("date");
    setFilterVal(dateV);
  };

  const enterRangeDate = () => {
    if (dateOne !== 0 && dateTwo !== 0) {
      setFilterType("rangeDate");
    } else {
      alert("please provide date range");
    }
    // setFilterVal(dateV);
  };

  const EnterPriority = (e) => {
    // setPriorityErr(false);
    setPriority(e.target.value);
    setFilterType("priority");
    setFilterVal(e.target.value);
  };

  const EnterAssigned = (e) => {
    setAssigned(e.target.value);
    setFilterType("assignedTo");
    setFilterVal(e.target.value);
  };

  const enterDateOne = (e) => {
    // setDateErr(false);
    // setDate(e.target.value);
    setDateOne(e.target.value);
  };
  const enterDateTwo = (e) => {
    // setDateErr(false);
    // setDate(e.target.value);
    setDateTwo(e.target.value);
  };

  return (
    <div className={classes.completed}>
      <ul className={classes.head}>
        <li>
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            value={priority}
            onChange={EnterPriority}
            // className={`${priorityErr && classes.error}`}
            defaultValue={prior[0].value}
            // helperText="Please select priority of task"
          >
            {prior.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </li>
        <li>
          <TextField
            id="outlined-basic"
            select
            label="Assigned To"
            defaultValue={assign[0].value}
            value={assigned}
            onChange={EnterAssigned}
            // className={`${assignedErr && classes.error}`}
            // helperText={
            //   assignedErr && "Please provide a name of assigned person's name"
            // }
          >
            {assign.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </li>
        <li className={classes.data}>
          <label>
            <input
              type="date"
              className={classes.textField}
              value={date}
              // min={time1}
              onChange={enterDate}
              // className={classes.textField}
              // value={dateOne}
              // onChange={enterDateOne}
              // style={{ border: dateErr ? "1px solid red" : "1px solid black" }}
            />
            {/* {dateErr ? (
              <p style={{ fontSize: ".5em", color: "red" }}>select date</p>
            ) : (
              <p style={{ fontSize: ".5em" }}>select date</p>
            )} */}
          </label>
        </li>
        <li className={classes.dateRange}>
          from :
          <label>
            <input
              type="date"
              // value={date}
              // onChange={enterDate}
              // min={time1}
              // className={classes.textField}
              value={dateOne}
              onChange={enterDateOne}
              // style={{ border: dateErr ? "1px solid red" : "1px solid black" }}
            />
            {/* {dateErr ? (
              <p style={{ fontSize: ".5em", color: "red" }}>select date</p>
            ) : (
              <p style={{ fontSize: ".5em" }}>select date</p>
            )} */}
          </label>
          {/* <TextField
            id="date"
            label="Deadline"
            type="date"
            // defaultValue="2017-05-24"
            className={classes.textField}
            value={dateOne}
            onChange={enterDateOne}
            // className={`${dateErr && classes.error}`}
            // helperText={dateErr && "Please select a date"}
            InputLabelProps={{
              shrink: true,
            }}
          /> */}
          to:
          <label>
            <input
              type="date"
              // value={date}
              // onChange={enterDate}
              // min={time1}
              className={classes.textField}
              value={dateTwo}
              onChange={enterDateTwo}
              // style={{ border: dateErr ? "1px solid red" : "1px solid black" }}
            />
            {/* {dateErr ? (
              <p style={{ fontSize: ".5em", color: "red" }}>select date</p>
            ) : (
              <p style={{ fontSize: ".5em" }}>select date</p>
            )} */}
          </label>
          <Button variant="contained" color="primary" onClick={enterRangeDate}>
            Apply
          </Button>
        </li>
      </ul>
      <div className={classes.listCard}>
        <Card
          bgColor="rgb(158, 197, 84)"
          taskType="Completed"
          task={completedTask}
        />
      </div>
    </div>
  );
}

export default Completed;
