import React from "react";
import { Filter } from "../Filter/Filter";
import styles from "./styles.module.css";

export const Footer = ({
  amountTodo,
  todosArray,
  getFilter,
  deleteComplited,
}) => {
  const amountTodoString = amountTodo === 1 ? "item left" : "items left";
  return (
    <footer className={!todosArray.length ? styles.rootOff : styles.root}>
      <span className={styles.todoCount}>
        {amountTodo} {amountTodoString}
      </span>
      <Filter getFilter={getFilter} className={styles.filter} />

      <span
        className={
          amountTodo === todosArray.length || amountTodo === 0
            ? styles.clearComplitedOff
            : styles.clearComplited
        }
        onClick={() => {
          deleteComplited(todosArray);
        }}
      >
        Clear complited
      </span>
    </footer>
  );
};
