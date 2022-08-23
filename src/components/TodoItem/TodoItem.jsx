import React from "react";
import styles from "./styles.module.css";

export const TodoItem = ({ todo, isComplitedTodo, removeTodo }) => {
  return (
    <div className={styles.root} id={todo.id}>
      <button
        className={styles.checkbox}
        onClick={() => {
          isComplitedTodo(todo);
        }}
      >
        <div className={!todo.isComplited ? styles.circle : styles.done}></div>
        <label className={!todo.isComplited ? styles.todo : styles.todoDone}>
          {todo.title}
        </label>
      </button>

      <button
        className={styles.closeButton}
        onClick={() => {
          removeTodo(todo.id, !todo.isComplited);
        }}
      >
        X
        <img className={styles.cross} />
      </button>
    </div>
  );
};
