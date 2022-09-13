import React, { useEffect } from "react";

const Task = (props) => {

    useEffect(()=>{
        console.log(" task component mounted")

        return () => {
            console.log("task component unmounted")
        }
      },[])


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
