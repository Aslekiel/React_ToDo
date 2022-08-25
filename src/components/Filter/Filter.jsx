import React, { useState } from "react";
import styles from "./styles.module.css";

export const Filter = ({ setFilteredTodos }) => {
  const [selected, setSelected] = useState("1");

  return (
    <ul className={styles.root}>
      <li className={selected === "1" ? styles.selected : styles.none}>
        <a
          id={1}
          href="#All"
          onClick={() => {
            setFilteredTodos("All");
            setSelected("1");
          }}
        >
          All
        </a>
      </li>
      <li className={selected === "2" ? styles.selected : styles.none}>
        <a
          id={2}
          href="#Active"
          onClick={() => {
            setFilteredTodos("Active");
            setSelected("2");
          }}
        >
          Active
        </a>
      </li>
      <li className={selected === "3" ? styles.selected : styles.none}>
        <a
          id={3}
          href="#Complited"
          onClick={() => {
            setFilteredTodos("Complited");
            setSelected("3");
          }}
        >
          Complited
        </a>
      </li>
    </ul>
  );
};
