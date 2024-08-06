import { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [search, setSearch] = useState("");

  // const [todos, setTodos] = useState([]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <h1>My To Do List</h1>
      <TodoForm />
      <div>
        <input
          className="todo-input"
          type="text"
          placeholder="search"
          value={search}
          onChange={handleSearchChange}
        />
        <button className="todo-button">Search</button>
      </div>
    </div>
  );
};

export default TodoList;
