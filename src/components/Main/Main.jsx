import React from "react";
import styles from "./styles.module.css";

import { TodoItem } from "../TodoItem/TodoItem";

export const Main = ({ todos, getComplitedTodo, removeTodo, editTodo }) => {
  return (
    <ul className={styles.root}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            getComplitedTodo={getComplitedTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
};
