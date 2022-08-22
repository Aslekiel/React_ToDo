import React from "react";
import styles from "./styles.module.css";

export const Filter = () => {
  return (
    <ul className={styles.root}>
      <li>
        <a href="#">All</a>
      </li>
      <li>
        <a href="#">Active</a>
      </li>
      <li>
        <a href="#">Complited</a>
      </li>
    </ul>
  );
};
