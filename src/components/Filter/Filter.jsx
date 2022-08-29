import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../store/redusers/rootReducer";
import styles from "./styles.module.css";
import store from "../../store/store";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = store.getState().filter;
  return (
    <ul className={styles.root}>
      <li className={filter === "All" ? styles.selected : styles.none}>
        <a
          href="#All"
          onClick={() => {
            dispatch(changeFilter("All"));
          }}
        >
          All
        </a>
      </li>
      <li className={filter === "Active" ? styles.selected : styles.none}>
        <a
          href="#Active"
          onClick={() => {
            dispatch(changeFilter("Active"));
          }}
        >
          Active
        </a>
      </li>
      <li className={filter === "Completed" ? styles.selected : styles.none}>
        <a
          href="#Completed"
          onClick={() => {
            dispatch(changeFilter("Completed"));
          }}
        >
          Completed
        </a>
      </li>
    </ul>
  );
};
