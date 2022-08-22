import React from "react";
import styles from "./styles.module.css";

export const TodoItem = ({ todo, index }) => {
  return (
    <div className={styles.root}>
      <button className={styles.checkbox}>
        <div className={styles.circle} />
      </button>
      <li className={styles.todo}>{todo}</li>
      <button className={styles.closeButton}>
        <img className={styles.cross} />
      </button>
    </div>
  );
};
