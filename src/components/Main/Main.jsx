import React from "react";
import styles from "./styles.module.css";

import { TodoItem } from "../TodoItem/TodoItem";

export const Main = ({ todos, getCompletedTodo, removeTodo, editTodo }) => {
  return (
    <ul className={styles.root}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            getCompletedTodo={getCompletedTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
};
