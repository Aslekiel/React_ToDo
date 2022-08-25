import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";

import { nanoid } from "nanoid";

export const App = ({}) => {
  const [todosArray, setTodosArray] = useState([]);
  const [filterForTodos, setFilteredTodos] = useState("All");

  const todos = todosArray.filter((item) => {
    if (filterForTodos === "All") return todosArray;
    if (filterForTodos === "Active") {
      return !item.isComplited;
    }
    return item.isComplited;
  });

  const amountTodo = todosArray.filter((item) => !item.isComplited).length;

  const addNewTodo = (todoTitle) => {
    if (!todoTitle) return;
    const todo = {
      id: nanoid(),
      title: todoTitle,
      isComplited: false,
    };
    setTodosArray([...todosArray, todo]);
  };

  const compliteAllTodos = () => {
    const compliteAllTodosArray = todosArray.map((item) => {
      return !amountTodo
        ? { ...item, isComplited: false }
        : { ...item, isComplited: true };
    });
    setTodosArray(compliteAllTodosArray);
  };

  const editTodo = (editedTodo, todo) => {
    const editedTodosArray = todosArray.map((item) =>
      todo.id === item.id ? { ...item, title: editedTodo } : item
    );
    setTodosArray(editedTodosArray);
  };

  const removeTodo = (todo) => {
    setTodosArray((prevState) =>
      prevState.filter((elem) => elem.id !== todo.id)
    );
  };

  const getComplitedTodo = (todo) => {
    const complitedTodosArray = todosArray.map((item) =>
      todo.id === item.id ? { ...item, isComplited: !item.isComplited } : item
    );
    setTodosArray(complitedTodosArray);
  };

  const deleteComplited = (todosArray) => {
    const activeTodos = todosArray.filter((item) => !item.isComplited);
    setTodosArray(activeTodos);
  };

  return (
    <div className={styles.root}>
      <Header addNewTodo={addNewTodo} compliteAllTodos={compliteAllTodos} />
      <Main
        todos={todos}
        removeTodo={removeTodo}
        getComplitedTodo={getComplitedTodo}
        editTodo={editTodo}
      />
      <Footer
        amountTodo={amountTodo}
        todosArray={todosArray}
        setFilteredTodos={setFilteredTodos}
        deleteComplited={deleteComplited}
      />
    </div>
  );
};
