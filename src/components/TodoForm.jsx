import { useState } from "react";

const TodoForm = () => {
  const [input, setInput] = useState("");

  const handleChange = () => {
    setInput();
  };
  return (
    <>
      <input
        className="todo-input"
        type="text"
        placeholder="add item"
        value={input}
        onChange={handleChange}
      />
      <input
        className="todo-input"
        type="text"
        placeholder="update item"
        value={input}
        onChange={handleChange}
      />
    </>
  );
};

export default TodoForm;
