import React, { FC } from 'react';
import { text } from 'stream/consumers';
import './App.css';

const App: FC = () => {
  return <div className = "App">
    <div className = "header">
      <div className = "inputContainer">
      <input type="text" placeholder = "My task:"/>
      <input type="number" placeholder = "Time (in days):"/>
      </div>
      <button>Add task</button>
    </div>
    <div className = "list"></div>
  </div>
}

export default App;
