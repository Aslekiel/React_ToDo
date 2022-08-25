import React, { useState } from "react";
import styles from "./styles.module.css";

export const Filter = ({ getFilter }) => {
  const [selected, setSelected] = useState(1);

  const changeFilters = (event) => {
    getFilter(event.target.innerText);
    setSelected(Number(event.target.id));
  };

  return (
    <ul className={styles.root}>
      <li className={selected === 1 ? styles.selected : styles.none}>
        <a
          id={1}
          href="#All"
          onClick={(event) => {
            changeFilters(event);
          }}
        >
          All
        </a>
      </li>
      <li className={selected === 2 ? styles.selected : styles.none}>
        <a
          id={2}
          href="#Active"
          onClick={(event) => {
            changeFilters(event);
          }}
        >
          Active
        </a>
      </li>
      <li className={selected === 3 ? styles.selected : styles.none}>
        <a
          id={3}
          href="#Complited"
          onClick={(event) => {
            changeFilters(event);
          }}
        >
          Complited
        </a>
      </li>
    </ul>
  );
};
