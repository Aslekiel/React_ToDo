import React from "react";
import styles from "./styles.module.css";

export const Filter = ({ filterForTodos, setFilteredTodos }) => {
  return (
    <ul className={styles.root}>
      <li className={filterForTodos === "All" ? styles.selected : styles.none}>
        <a
          href="#All"
          onClick={() => {
            setFilteredTodos("All");
          }}
        >
          All
        </a>
      </li>
      <li
        className={filterForTodos === "Active" ? styles.selected : styles.none}
      >
        <a
          href="#Active"
          onClick={() => {
            setFilteredTodos("Active");
          }}
        >
          Active
        </a>
      </li>
      <li
        className={
          filterForTodos === "Complited" ? styles.selected : styles.none
        }
      >
        <a
          href="#Complited"
          onClick={() => {
            setFilteredTodos("Complited");
          }}
        >
          Complited
        </a>
      </li>
    </ul>
  );
};
