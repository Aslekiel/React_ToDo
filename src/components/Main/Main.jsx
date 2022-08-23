import React from "react";
import styles from "./styles.module.css";

import { TodoItem } from "../TodoItem/TodoItem";

export const Main = ({ todosArray, isComplitedTodo, removeTodo }) => {
  return (
    <ul className={styles.root}>
      {todosArray.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            todo={todo}
            id={index}
            isComplitedTodo={isComplitedTodo}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
};
