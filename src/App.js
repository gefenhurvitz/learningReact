import { useState } from "react";
import "./App.css";
// import { User } from "./User";

function App() {
  const [hello, setHello] = useState("");
  const [textColor, setTextColor] = useState("blue");
  const [showText, setShowText] = useState(true);
  const [number, setNumber] = useState(0);

  // todo states
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  // todo functions
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    console.log(`deleted ${id}`);
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    //
    <div className="App">
      {/* input box */}
      <div className="textinput">
        <h1>{hello}</h1>
        <input
          onChange={(something) => {
            setHello(
              something.target.value,
              console / console.log(something.target.value)
            );
          }}
          type="text"
        />
      </div>

      {/* change color btn */}
      <div className="textinput">
        <button
          onClick={() => {
            setTextColor(textColor === "red" ? "blue" : "red");
          }}
        >
          change color
        </button>
        <h1 style={{ color: textColor }}>this is the color</h1>
      </div>

      {/* show/hide btn */}
      <div className="textinput">
        <button
          onClick={() => {
            setTextColor(textColor === "red" ? "blue" : "red");
          }}
        >
          change color
        </button>

        <button
          onClick={() => {
            setShowText(showText === true ? false : true);
          }}
        >
          show/hide
        </button>
        {showText && <h1 style={{ color: textColor }}>this is my text</h1>}
      </div>

      {/* counter */}
      <div className="textinput">
        <h1>counter</h1>
        <h2>{number}</h2>
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          increse
        </button>

        <button
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          decresr
        </button>

        <button
          onClick={() => {
            setNumber(0);
          }}
        >
          set to 0
        </button>
      </div>

      {/* toDo list */}
      <div className="textinput">
        <h1>the new task : {newTask}</h1>

        <input onChange={handleChange} />
        <button onClick={addTask}>add</button>
        <div className="tasks">
          {todoList.map((task) => {
            return (
              <div className="task">
                <h1>name: {task.taskName}</h1>
                <h1>id: {task.id}</h1>
                <button onClick={() => deleteTask(task.id)}>delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div> // close App
  );
}

export default App;
