import React, { useState } from "react";
import styles from "./styles.module.css";

import { nanoid } from "nanoid";

export const Header = ({ addNewTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const todo = {
    id: nanoid(),
    title: todoTitle,
    isComplited: false,
  };

  return (
    <header className={styles.root}>
      <h1>todos</h1>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          addNewTodo(todo);
          setTodoTitle("");
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
