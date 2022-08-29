import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComplitedTodos } from "../../store/redusers/rootReducer";
import { Filter } from "../Filter/Filter";
import styles from "./styles.module.css";

export const Footer = ({ amountTodo }) => {
  const allReceivedTodos = useSelector((state) => state.todos);
  const amountTodoString = amountTodo === 1 ? "item left" : "items left";

  const dispatch = useDispatch();

  const clearTodos = () => {
    dispatch(deleteComplitedTodos());
  };

  return (
    <footer className={!allReceivedTodos.length ? styles.rootOff : styles.root}>
      <span className={styles.todoCount}>
        {amountTodo} {amountTodoString}
      </span>
      <Filter className={styles.filter} />
      {amountTodo !== allReceivedTodos.length ? (
        <span className={styles.clearComplited} onClick={clearTodos}>
          Clear complited
        </span>
      ) : (
        ""
      )}
    </footer>
  );
};
