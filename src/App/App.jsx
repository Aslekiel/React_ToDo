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
      return !item.isCompleted;
    }
    return item.isCompleted;
  });

  const amountTodo = todosArray.filter((item) => !item.isCompleted).length;

  const addNewTodo = (todoTitle) => {
    if (!todoTitle) return;
    const todo = {
      id: nanoid(),
      title: todoTitle,
      isCompleted: false,
    };
    setTodosArray([...todosArray, todo]);
  };

  const completeAllTodos = () => {
    const completeAllTodosArray = todosArray.map((item) => {
      return !amountTodo
        ? { ...item, isCompleted: false }
        : { ...item, isCompleted: true };
    });
    setTodosArray(completeAllTodosArray);
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

  const getCompletedTodo = (todo) => {
    const completedTodosArray = todosArray.map((item) =>
      todo.id === item.id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodosArray(completedTodosArray);
  };

  const deleteCompleted = (todosArray) => {
    const activeTodos = todosArray.filter((item) => !item.isCompleted);
    setTodosArray(activeTodos);
  };

  return (
    <div className={styles.root}>
      <Header addNewTodo={addNewTodo} completeAllTodos={completeAllTodos} />
      <Main
        todos={todos}
        removeTodo={removeTodo}
        getCompletedTodo={getCompletedTodo}
        editTodo={editTodo}
      />
      <Footer
        amountTodo={amountTodo}
        todosArray={todosArray}
        setFilteredTodos={setFilteredTodos}
        deleteCompleted={deleteCompleted}
      />
    </div>
  );
};
