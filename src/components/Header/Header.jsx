import React, { useState } from "react";
import styles from "./styles.module.css";

export const Header = ({ addNewTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTodo(todoTitle);
    setTodoTitle("");
  };

  const onChangeInput = (event) => {
    event.preventDefault();
    setTodoTitle(event.target.value);
  };

  return (
    <header className={styles.root}>
      <h1>todos</h1>
      <form
        className={styles.form}
        onSubmit={(event) => {
          onFormSubmit(event);
        }}
      >
        <input
          className={styles.input}
          type="text"
          placeholder="What need to be done?"
          value={todoTitle}
          onChange={(event) => {
            onChangeInput(event);
          }}
          autoFocus
        />
      </form>
    </header>
  );
};
