import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.closest}>
        <Card bgColor="rgb(179, 56, 56)" taskType="Closest" task={["Task-1"]} />
      </div>
      <div className={classes.recent}>
        <Card
          bgColor="rgb(158, 197, 84)"
          taskType="Completed"
          task={["Task-1", "Task-2", "Task-3", "Task-4", "Task-5"]}
        />
        <Card
          bgColor="rgb(16, 150, 212)"
          taskType="Dead"
          task={["Task-1", "Task-2"]}
        />
        <Card
          bgColor="rgb(255, 217, 0)"
          taskType="Pending"
          task={["Task-1", "Task-2", "Task-3"]}
        />
      </div>
    </div>
  );
}

export default Home;
