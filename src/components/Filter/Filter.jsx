import React, { useState } from "react";
import styles from "./styles.module.css";

export const Filter = ({ changeFilter }) => {
  const [selected, setSelected] = useState(0);
  return (
    <ul className={styles.root}>
      <li id={1} className={selected == 1 ? styles.selected : styles.none}>
        <a
          href="#All"
          onClick={(event) => {
            changeFilter("All");
            setSelected(1);
          }}
        >
          All
        </a>
      </li>
      <li id={2} className={selected == 2 ? styles.selected : styles.none}>
        <a
          href="#Active"
          onClick={() => {
            changeFilter("Active");
            setSelected(2);
          }}
        >
          Active
        </a>
      </li>
      <li id={3} className={selected == 3 ? styles.selected : styles.none}>
        <a
          href="#Complited"
          onClick={() => {
            changeFilter("Complited");
            setSelected(3);
          }}
        >
          Complited
        </a>
      </li>
    </ul>
  );
};
