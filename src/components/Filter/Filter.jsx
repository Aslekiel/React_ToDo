import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../store/redusers/rootReducer";
import styles from "./styles.module.css";

export const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <ul className={styles.root}>
      <li className={filter === "All" ? styles.selected : ""}>
        <a
          href="#All"
          onClick={() => {
            dispatch(changeFilter("All"));
          }}
        >
          All
        </a>
      </li>
      <li className={filter === "Active" ? styles.selected : ""}>
        <a
          href="#Active"
          onClick={() => {
            dispatch(changeFilter("Active"));
          }}
        >
          Active
        </a>
      </li>
      <li className={filter === "Completed" ? styles.selected : ""}>
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
