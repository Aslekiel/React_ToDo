import React, { useState } from "react";
import styles from "./styles.module.css";

import { TodoItem } from "../TodoItem/TodoItem";

export const Main = ({
  todosArray,
  isComplitedTodo,
  removeTodo,
  filteredTodos,
}) => {
  return (
    <ul className={styles.root}>
      {todosArray.map((todo, index) => {
        if (filteredTodos == "All") {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              isComplitedTodo={isComplitedTodo}
              removeTodo={removeTodo}
            />
          );
        } else if (filteredTodos == "Active") {
          if (!todo.isComplited) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                isComplitedTodo={isComplitedTodo}
                removeTodo={removeTodo}
              />
            );
          }
        } else if (filteredTodos == "Complited") {
          if (todo.isComplited) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                isComplitedTodo={isComplitedTodo}
                removeTodo={removeTodo}
              />
            );
          }
        }
      })}
    </ul>
  );
};
