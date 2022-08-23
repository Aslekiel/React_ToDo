import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import styles from "./styles.module.css";

export const TodoItem = ({ todo, id, isComplitedTodo, removeTodo }) => {
  const [done, setDone] = useState(false);

  return (
    <div className={styles.root}>
      <button
        className={styles.checkbox}
        onClick={() => {
          setDone(!done);
          isComplitedTodo(!done);
        }}
      >
        <div className={!done ? styles.circle : styles.done}></div>
        <label className={!done ? styles.todo : styles.todoDone}>{todo}</label>
      </button>

      <button
        className={styles.closeButton}
        onClick={() => {
          removeTodo(id, !done);
        }}
      >
        X
        <img className={styles.cross} />
      </button>
    </div>
  );
};
