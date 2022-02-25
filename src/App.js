import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([
    "trevor",
    "report mezz to rozzers",
    "task 3",
  ]);

  const clearList = () => {
    setList([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mezz and Jamie's To-do app</h1>
      </header>
      <p>To-do</p>
      <ul>
        <li>{list[0]}</li>
        <li>{list[1]}</li>
        <li>{list[2]}</li>
      </ul>
      <button onClick={() => clearList()}>clear all</button>
    </div>
  );
}

export default App;
