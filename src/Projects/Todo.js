import React, { useState } from "react";
import style from "../Style/Todo.module.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const inputclick = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: Math.floor(Math.random() * 100),
      })
    );
    setInput("");
  };
  const remove = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };
  return (
    <>
      <div className={style.container}>
        <input
          className={style.input}
          type="text"
          placeholder="todo list"
          onChange={inputclick}
          value={input}
        />
        <button className={style.submitButton} onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <ul className={style.ul}>
        <li>List of Items : {todos.length}</li>
        {todos.map(({ text, id }) => (
          <li className={style.li} key={id}>
            <span className={style.listTest}>{text}</span>
            <button className={style.reemoveButton} onClick={() => remove(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
