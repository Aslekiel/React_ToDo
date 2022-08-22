import React from "react";
import styles from "./styles.module.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

import { useState } from "react";

export const App = () => {
  const [todo, setTodo] = useState("");
  const [count, setCount] = useState(0);
  const [todosArray, setTodosArray] = useState([]);

  const addNewTodo = () => {
    if (todo !== "") {
      setTodosArray([...todosArray, todo]);
      setTodo("");
    }
  };

  return (
    <div className={styles.root}>
      {
        <Header
          todo={todo}
          setTodo={setTodo}
          addNewTodo={addNewTodo}
          count={count}
          setCount={setCount}
        />
      }
      {<Main todosArray={todosArray} />}
      {<Footer count={count} />}
    </div>
  );
};
