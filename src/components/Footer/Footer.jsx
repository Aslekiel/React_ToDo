import React from "react";
import { useDispatch } from "react-redux";
import { deleteComplitedTodos } from "../../store/redusers/rootReducer";

import { Filter } from "../Filter/Filter";
import styles from "./styles.module.css";

export const Footer = ({ amountTodo, todosArray }) => {
  const dispatch = useDispatch();
  const amountTodoString = amountTodo === 1 ? "item left" : "items left";
  return (
    <footer className={!todosArray.length ? styles.rootOff : styles.root}>
      <span className={styles.todoCount}>
        {amountTodo} {amountTodoString}
      </span>
      <Filter className={styles.filter} />
      <span
        className={
          amountTodo === todosArray.length
            ? styles.clearComplitedOff
            : styles.clearComplited
        }
        onClick={() => {
          dispatch(deleteComplitedTodos());
        }}
      >
        Clear complited
      </span>
    </footer>
  );
};
