import React from "react";

const Task = (props) => {
  return (
    <div className={props.isDone === false ? "task" : "taskDone"}>
      <h1>name: {props.taskName}</h1>
      <h1>id: {props.id}</h1>
      <button onClick={() => props.deleteTask(props.id)}>delete</button>
      <button onClick={()=>props.doneTask(props.id)}>done</button>
    </div>
  );
};

export default Task;
