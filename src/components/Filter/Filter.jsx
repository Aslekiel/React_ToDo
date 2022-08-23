import React, { useState } from "react";
import styles from "./styles.module.css";

export const Filter = () => {
  return (
    <ul className={styles.root}>
      <li className={styles.all}>
        <a href="#">All</a>
      </li>
      <li className={styles.active}>
        <a href="#">Active</a>
      </li>
      <li className={styles.complited}>
        <a href="#">Complited</a>
      </li>
    </ul>
  );
};
