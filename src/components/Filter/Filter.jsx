import React, { useState } from "react";
import styles from "./styles.module.css";

export const Filter = ({ getAllTodos, getActiveTodos, getComplitedTodos }) => {
  return (
    <ul className={styles.root}>
      <li className={styles.all}>
        <a
          href="#"
          onClick={() => {
            getAllTodos();
          }}
        >
          All
        </a>
      </li>
      <li className={styles.active}>
        <a
          href="#"
          onClick={() => {
            getActiveTodos();
          }}
        >
          Active
        </a>
      </li>
      <li className={styles.complited}>
        <a
          href="#"
          onClick={() => {
            getComplitedTodos();
          }}
        >
          Complited
        </a>
      </li>
    </ul>
  );
};
