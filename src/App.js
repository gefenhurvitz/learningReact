import { useEffect, useState } from "react";
import "./App.css";
import Task from "./Task";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

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

  useEffect(() => {
    console.log(" app component mounted welllllll");
  }, []);

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isDone: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    console.log(`deleted ${id}`);
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    console.log(`done ${id}`);
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: true };
        } else {
          return task;
        }
      })
    );
  };

  // cat fact

  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      setCatFact(res.data.fact);
    });
  };

  // input name
  const [inputName, setInputName] = useState("");
  const [ageName, setAgeName] = useState("");

  const fetchDadaName = () => {
    axios.get(`https://api.agify.io?name=${inputName}`).then((res) => {
      console.log(res.excuse);
      setAgeName(res.data);
    });
  };

  //  excuser
  // https://excuser.herokuapp.com/v1/excuse/family/

  const [excuse, setExcuse] = useState("");

  const fetchExcuse = (category) => {
    axios
      .get(`https://excuser.herokuapp.com/v1/excuse/${category}`)
      .then((res) => {
        console.log(res.data[0]);
        setExcuse(res.data[0]);
      });
  };

  return (
    <div className="App">
      {/* routes */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>



      {/* input box */}
      <div className="textinput">
        <h1>{hello}</h1>
        <input
          onChange={(something) => {
            setHello(something.target.value);
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
              <Task
                isDone={task.isDone}
                doneTask={doneTask}
                taskName={task.taskName}
                id={task.id}
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      </div>

      {/* cat fact */}
      <div className="textinput">
        <h1>{catFact}</h1>
        <button onClick={fetchCatFact}>show fact</button>
      </div>

      {/* predict age */}
      <div className="textinput">
        <input
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
        <h1>
          {" "}
          {ageName.name}'s predicted age is {ageName.age}
        </h1>
        <button onClick={fetchDadaName}>predict age</button>
      </div>

      {/* excuser random */}
      <div className="textinput">
        <h1>generate excuse</h1>
        <button onClick={() => fetchExcuse("family")}>family</button>
        <button
          onClick={() => {
            fetchExcuse("office");
          }}
        >
          office
        </button>

        <h2>id: {excuse.id}</h2>
        <h2>category: {excuse.category}</h2>
        <h2>excuse: {excuse.excuse}</h2>
      </div>
    </div> // close App
  );
}

export default App;
