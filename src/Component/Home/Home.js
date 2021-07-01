import React, { useState, useEffect } from "react";
import Card from "../../UI/Card/Card";
import classes from "./Home.module.css";
import { useSelector } from "react-redux";

function Home() {
  const [closest, setClosest] = useState([]);
  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [dead, setDead] = useState([]);

  const tasks = useSelector((state) => state.taskTotal);

  useEffect(() => {
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
      } else if (el.status === "Pending") {
        setPending((prev) => {
          const newArr = [...prev, el];
          return newArr;
        });
      } else if (el.status === "Dead") {
        setDead((prev) => {
          const newArr = [...prev, el];
          return newArr;
        });
      }
    });
  }, [tasks]);

  return (
    <div className={classes.home}>
      <div className={classes.closest}>
        <Card bgColor="rgb(179, 56, 56)" taskType="Pending" task={closest} />
      </div>
      <div className={classes.recent}>
        <Card
          bgColor="rgb(158, 197, 84)"
          taskType="Completed"
          task={completed}
        />
        <Card bgColor="rgb(16, 150, 212)" taskType="Dead" task={dead} />
        <Card bgColor="rgb(255, 217, 0)" taskType="Pending" task={pending} />
      </div>
    </div>
  );
}

export default Home;
