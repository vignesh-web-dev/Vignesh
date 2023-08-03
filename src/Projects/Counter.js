import React, { useState } from "react";
import style from "../Style/Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className={style.container}>
        <button className={style.button1} onClick={increment}>
          +
        </button>
        <h2 className={style.h2}>{count}</h2>
        <button className={style.button2} onClick={decrement}>
          -
        </button>
      </div>
    </>
  );
}
