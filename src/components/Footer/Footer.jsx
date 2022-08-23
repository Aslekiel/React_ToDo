import React from "react";
import { Filter } from "../Filter/Filter";
import styles from "./styles.module.css";

export const Footer = ({ count }) => {
  const todoCountString = count == 1 ? "item left" : "items left";

  return (
    <footer className={count == 0 ? styles.rootOff : styles.root}>
      <span className={styles.todoCount}>
        {count} {todoCountString}
      </span>
      <Filter />
      <button className={styles.clearComplited}>Clear complited</button>
    </footer>
  );
};
