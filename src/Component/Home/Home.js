import React, { useState, useEffect, Fragment } from "react";
import Card from "../../UI/Card/Card";
import classes from "./Home.module.css";
import { useSelector } from "react-redux";
import Notification from "../../UI/Notification/Notification";
// import moment from "moment";

function Home() {
  const [closest, setClosest] = useState([]);
  const [currDate, setCurrDate] = useState("");
  const [pending, setPending] = useState([]);
  const [due, setDue] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [dead, setDead] = useState([]);
  const [notification, setNotification] = useState([]);
  const [init, setInit] = useState(true);

  const tasks = useSelector((state) => state.taskTotal);

  const getTime = () => {
    const year = new Date().getUTCFullYear();
    let month = new Date().getMonth();
    month = month > 9 ? month : "0" + month;
    let date = new Date().getDate();
    date = date > 9 ? date : "0" + date;
    const time = `${year}-${month}-${date}`;
    // const timeInt = parseInt(time);
    setCurrDate(time);
    // return parseInt(time);
  };

  useEffect(() => {
    // getTime();
    // console.log("a", currDate);
    setClosest([]);
    setPending([]);
    setCompleted([]);
    setDead([]);
    tasks.forEach((el) => {
      if (el.status === "Completed") {
        setCompleted((prev) => {
          const newArr = [...prev, el];
          return newArr;
        });
      } else if (el.priority === "More Prior" && el.status === "Pending") {
        setClosest((prev) => {
          const newArr = [...prev, el];
          return newArr;
        });
        setPending((prev) => {
          const newArr = [...prev, el];
          return newArr;
        });
      } else if (el.status === "Pending") {
        // console.log(parseInt(el.assignedDate.split("-").join("")));
        setPending((prev) => {
          const newArr = [...prev, el];
          return newArr;
        });
        console.log(el)
        // const year = new Date().getUTCFullYear();
        // let month = new Date().getMonth();
        // month = month > 9 ? month : "0" + month;
        // let date = new Date().getDate();
        // date = date > 9 ? date : "0" + date;
        // const time = `${year}-${month}-${date}`;
        const year = new Date().getUTCFullYear();
        let month = new Date().getMonth() + 1;
        // month = month > 9 ? month : "0" + month;
        let date = new Date().getDate();
        // date = date > 9 ? date : "0" + date;
        const time = `${year}-${month}-${date}`;
        const d1 = time.split('-')
        const d2 = el.assignedDate.split('-')
        if (parseInt(d2[1]) - parseInt(d1[1]) === 0) {
          console.log('aaaaaaaaaaa')
          console.log(parseInt(d2[2]) - parseInt(d1[2]))
          if (parseInt(d2[2]) - parseInt(d1[2]) < 3) {
            setNotification((prev) => {
              const newArr = [...prev, el];
              return newArr;
            });
          }
        } else {
          console.log(parseInt(d2[2]) + (30 * (parseInt(d2[1]) - parseInt(d1[1]))) - parseInt(d1[2]))
          if ((parseInt(d2[2]) + (30 * (parseInt(d2[1]) - parseInt(d1[1]))) - parseInt(d1[2])) < 3) {
            setNotification((prev) => {
              const newArr = [...prev, el];
              return newArr;
            });
          }
        }
      } else if (el.status === "Dead") {
        setDead((prev) => {
          const newArr = [...prev, el];
          return newArr;
        });
      } else if (el.status === "Overdue") {
        console.log("object");
        setDue((prev) => {
          const newArr = [...prev, el];
          return newArr;
        });
        if (parseInt(currDate - el.assignedDate.split("-").join("")) < 3) {
          if (init) {
            setNotification((prev) => {
              const newArr = [...prev, el];
              return newArr;
            });
          }
        }
        console.log(due);
      }
    });
    setInit(false);
  }, [tasks]);

  return (
    <Fragment>
      <Notification task={notification} />
      <div className={classes.home}>
        {/* <Card bgColor="rgb(179, 56, 56)" taskType="Pending" task={closest} /> */}
        <Card
          bgColor="rgb(158, 197, 84)"
          taskType="Completed"
          task={completed}
        />
        <Card bgColor="rgb(16, 150, 212)" taskType="Dead" task={dead} />
        <Card bgColor="rgb(255, 217, 0)" taskType="Pending" task={pending} />
        <Card bgColor="rgb(255, 217, 0)" taskType="Overdue" task={due} />
      </div>
    </Fragment>
  );
}

export default Home;
