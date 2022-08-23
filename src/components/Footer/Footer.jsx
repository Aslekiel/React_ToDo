import React from "react";
import { Filter } from "../Filter/Filter";
import styles from "./styles.module.css";

export const Footer = ({
  count,
  todosArray,
  getAllTodos,
  getActiveTodos,
  getComplitedTodos,
  deleteComplited,
}) => {
  const todoCountString = count == 1 ? "item left" : "items left";
  return (
    <footer className={!todosArray.length ? styles.rootOff : styles.root}>
      <span className={styles.todoCount}>
        {count} {todoCountString}
      </span>
      <Filter
        getAllTodos={getAllTodos}
        getActiveTodos={getActiveTodos}
        getComplitedTodos={getComplitedTodos}
      />
      <button
        className={styles.clearComplited}
        onClick={() => {
          deleteComplited(todosArray);
        }}
      >
        Clear complited
      </button>
    </footer>
  );
};
