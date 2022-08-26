import React from "react";
import { Filter } from "../Filter/Filter";
import styles from "./styles.module.css";

export const Footer = ({
  amountTodo,
  todosArray,
  filterForTodos,
  setFilteredTodos,
  deleteCompleted,
}) => {
  const amountTodoString = amountTodo === 1 ? "item left" : "items left";
  return (
    <footer className={!todosArray.length ? styles.rootOff : styles.root}>
      <span className={styles.todoCount}>
        {amountTodo} {amountTodoString}
      </span>
      <Filter
        filterForTodos={filterForTodos}
        setFilteredTodos={setFilteredTodos}
        className={styles.filter}
      />
      <span
        className={
          amountTodo === todosArray.length
            ? styles.clearComplitedOff
            : styles.clearComplited
        }
        onClick={() => {
          deleteCompleted(todosArray);
        }}
      >
        Clear complited
      </span>
    </footer>
  );
};
