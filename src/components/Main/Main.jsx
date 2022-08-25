import React, { useState } from "react";
import styles from "./styles.module.css";

import { TodoItem } from "../TodoItem/TodoItem";

export const Main = ({ todos, isComplitedTodo, removeTodo, editTodo }) => {
  return (
    <ul className={styles.root}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            isComplitedTodo={isComplitedTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
};
