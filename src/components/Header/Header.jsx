import React from "react";
import styles from "./styles.module.css";

import { nanoid } from "nanoid";

export const Header = ({
  todoTitle,
  setTodoTitle,
  addNewTodo,
  count,
  setCount,
}) => {
  const todo = {
    id: nanoid(),
    title: todoTitle,
    isComplited: false,
  };
  return (
    <header className={styles.root}>
      <h1>todos</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addNewTodo(todo);
        }}
      >
        <input
          className={styles.input}
          type="text"
          placeholder="What need to be done?"
          value={todoTitle}
          onChange={(event) => {
            event.preventDefault();
            setTodoTitle(event.target.value);
          }}
        />
      </form>
    </header>
  );
};
