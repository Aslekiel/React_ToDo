import React from "react";
import styles from "./styles.module.css";

import { TodoItem } from "../TodoItem/TodoItem";

export const Main = ({ todosArray }) => {
  return (
    <ul className={styles.root}>
      {todosArray.map((todo, index) => {
        return <TodoItem todo={todo} index={index} key={index} />;
      })}
    </ul>
  );
};
