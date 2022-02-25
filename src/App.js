import "./App.css";
import { useState } from "react";

function App() {
  // Declare a new state variable called "list".
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
      <Header />
      <TodoList list={list} />
      <p>To-do</p>
      <button onClick={() => clearList()}>clear all</button>
    </div>
  );
}

const Header = () => {
  return <h1 id="Header">Mezz and Jamie's To-do app</h1>;
};

const TodoList = (props) => {
  return (
    <ul>
      {props.list.map((task) => {
        return <li key={task}>{task}</li>;
      })}
    </ul>
  );
};

export default App;
