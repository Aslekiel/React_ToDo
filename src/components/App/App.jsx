import React from "react";
import styles from "./styles.module.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

import { useState } from "react";

export const App = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todosArray, setTodosArray] = useState([]);

  const [count, setCount] = useState(0);

  const addNewTodo = (todo) => {
    if (todo.title !== "") {
      setTodosArray([...todosArray, todo]);
      setTodoTitle("");
      setCount(count + 1);
    }
  };

  const isComplitedTodo = (todo) => {
    todo.isComplited = !todo.isComplited;
    !todo.isComplited ? setCount(count + 1) : setCount(count - 1);
  };

  const removeTodo = (id, complited) => {
    setTodosArray((prevState) => prevState.filter((elem) => elem.id !== id));
    !complited ? setCount(count) : setCount(count - 1);
  };

  const getAllTodos = () => {};

  const getActiveTodos = () => {};

  const getComplitedTodos = () => {};

  const deleteComplited = (todosArray) => {
    todosArray.map((todo) => {
      if (todo.isComplited) {
        setTodosArray((prevState) =>
          prevState.filter((elem) => elem.id !== todo.id)
        );
      }
    });
  };

  return (
    <div className={styles.root}>
      {
        <Header
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          addNewTodo={addNewTodo}
          count={count}
          setCount={setCount}
        />
      }
      {
        <Main
          todosArray={todosArray}
          isComplitedTodo={isComplitedTodo}
          removeTodo={removeTodo}
        />
      }
      {
        <Footer
          count={count}
          todosArray={todosArray}
          getAllTodos={getAllTodos}
          getActiveTodos={getActiveTodos}
          getComplitedTodos={getComplitedTodos}
          deleteComplited={deleteComplited}
        />
      }
    </div>
  );
};
