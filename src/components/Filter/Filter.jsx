import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../store/redusers/filter";
import store from "../../store/store";
import styles from "./styles.module.css";

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <ul className={styles.root}>
      <li
        className={
          store.getState().filter === "All" ? styles.selected : styles.none
        }
      >
        <a
          href="#All"
          onClick={() => {
            dispatch(changeFilter("All"));
          }}
        >
          All
        </a>
      </li>
      <li
        className={
          store.getState().filter === "Active" ? styles.selected : styles.none
        }
      >
        <a
          href="#Active"
          onClick={() => {
            dispatch(changeFilter("Active"));
          }}
        >
          Active
        </a>
      </li>
      <li
        className={
          store.getState().filter === "Complited"
            ? styles.selected
            : styles.none
        }
      >
        <a
          href="#Complited"
          onClick={() => {
            dispatch(changeFilter("Complited"));
          }}
        >
          Complited
        </a>
      </li>
    </ul>
  );
};
