import React, { FC,useState,ChangeEvent } from 'react';
import './App.css';
import {ITask} from "./Interfaces"

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todolist, setTodolist] = useState<ITask[]>([]);

  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };
  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setDeadline(Number(event.target.value));
  };
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodolist([...todolist, newTask]);
    setTask("")
    setDeadline(0)
  };
  return <div className="App">
    <div className="header">
      <div className="inputContainer">
        <input type="text" placeholder="My task:" name="task" value={task} onChange={handleTaskChange} />
        <input type="number" placeholder="Time (in days):" name="deadline" value={deadline} onChange={handleNumberChange} />
      </div>
      <button onClick={addTask}>Add task</button>
    </div>
    <div className="list"></div>
  </div>;
}

export default App;
