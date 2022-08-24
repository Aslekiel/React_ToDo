import React, { useState } from "react";
import styles from "./styles.module.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

export const App = ({}) => {
  const [todosArray, setTodosArray] = useState([]);
  const [count, setCount] = useState(0);
  const [filteredTodos, setFilteredTodos] = useState("All");

  const addNewTodo = (todo) => {
    if (todo.title !== "") {
      setTodosArray([...todosArray, todo]);
      setCount(count + 1);
    }
  };

  const changeFilter = (filter) => {
    setFilteredTodos(filter);
  };

  const isComplitedTodo = (todo) => {
    todo.isComplited = !todo.isComplited;
    !todo.isComplited ? setCount(count + 1) : setCount(count - 1);
  };

  const removeTodo = (id, complited) => {
    setTodosArray((prevState) => prevState.filter((elem) => elem.id !== id));
    !complited ? setCount(count) : setCount(count - 1);
  };

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
      {<Header addNewTodo={addNewTodo} />}
      {
        <Main
          todosArray={todosArray}
          isComplitedTodo={isComplitedTodo}
          removeTodo={removeTodo}
          filteredTodos={filteredTodos}
        />
      }
      {
        <Footer
          count={count}
          todosArray={todosArray}
          changeFilter={changeFilter}
          deleteComplited={deleteComplited}
        />
      }
    </div>
  );
};
