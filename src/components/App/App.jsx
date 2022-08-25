import React, { useState } from "react";
import styles from "./styles.module.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

import { nanoid } from "nanoid";

export const App = ({}) => {
  const [todosArray, setTodosArray] = useState([]);
  const [filterForTodos, setFilteredTodos] = useState("All");
  const filteredTodos =
    filterForTodos === "Active"
      ? todosArray.filter((item) => !item.isComplited)
      : todosArray.filter((item) => item.isComplited);

  const amountTodo =
    filterForTodos === "Complited"
      ? todosArray.filter((item) => item.isComplited).length
      : todosArray.filter((item) => !item.isComplited).length;

  const addNewTodo = (todoTitle) => {
    const todo = {
      id: nanoid(),
      title: todoTitle,
      isComplited: false,
    };

    if (todo.title !== "") {
      setTodosArray([...todosArray, todo]);
    }
  };

  const editTodo = (editedTodo, todo) => {
    setTodosArray(
      todosArray.map((item) =>
        todo.id === item.id ? { ...item, title: editedTodo } : item
      )
    );
  };

  const removeTodo = (todo) => {
    setTodosArray((prevState) =>
      prevState.filter((elem) => elem.id !== todo.id)
    );
  };

  const isComplitedTodo = (todo) => {
    setTodosArray(
      todosArray.map((item) =>
        todo.id === item.id ? { ...item, isComplited: !item.isComplited } : item
      )
    );
  };

  const deleteComplited = (todosArray) => {
    setTodosArray(todosArray.filter((item) => !item.isComplited));
  };

  const getFilter = (filter) => {
    setFilteredTodos(filter);
  };

  return (
    <div className={styles.root}>
      <Header addNewTodo={addNewTodo} />
      <Main
        todos={filterForTodos === "All" ? todosArray : filteredTodos}
        removeTodo={removeTodo}
        isComplitedTodo={isComplitedTodo}
        editTodo={editTodo}
      />
      <Footer
        amountTodo={amountTodo}
        todosArray={todosArray}
        getFilter={getFilter}
        deleteComplited={deleteComplited}
      />
    </div>
  );
};
