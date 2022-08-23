import React from "react";
import styles from "./styles.module.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

import { useState } from "react";

export const App = () => {
  const [todo, setTodo] = useState("");
  const [todosArray, setTodosArray] = useState([]);
  const [count, setCount] = useState(0);

  const addNewTodo = () => {
    if (todo !== "") {
      setTodosArray([...todosArray, todo]);
      setTodo("");
      setCount(count + 1);
    }
  };

  const isComplitedTodo = (done) => {
    !done ? setCount(count + 1) : setCount(count - 1);
  };

  const removeTodo = (id, done) => {
    setTodosArray((prevState) =>
      prevState.filter((elem, index) => index !== id)
    );
    !done ? setCount(count) : setCount(count - 1);
  };

  function getActiveTodos() {}

  function getComplitedTodos() {}

  return (
    <div className={styles.root}>
      {<Header todo={todo} setTodo={setTodo} addNewTodo={addNewTodo} />}
      {
        <Main
          todosArray={todosArray}
          isComplitedTodo={isComplitedTodo}
          removeTodo={removeTodo}
        />
      }
      {<Footer count={count} />}
    </div>
  );
};
