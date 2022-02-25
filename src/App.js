import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const clearList = () => {
    setList([]);
  };

  return (
    <div className="App">
      <Header />
      <p>To do</p>
      <TodoList list={list} />
      <TaskAdder setList={setList} />
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
      {props.list.map((task, i) => {
        return <li key={`${task}-${i}`}>{task}</li>;
      })}
    </ul>
  );
};

const TaskAdder = ({ setList }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setList((currentList) => {
      return [newTask, ...currentList];
    });
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add a new task:
        <input
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
      </label>
      <button type="submit">Add task</button>
    </form>
  );
};

export default App;

// submit button
// handler for submit
// update currrent todo list with newtask - setlist
