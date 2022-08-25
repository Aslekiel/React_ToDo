import React, { useState } from "react";
import styles from "./styles.module.css";

export const Header = ({ addNewTodo, compliteAllTodos }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTodo(todoTitle);
    setTodoTitle("");
  };

  const onChangeInput = (event) => {
    setTodoTitle(event.target.value);
  };

  return (
    <header className={styles.root}>
      <h1>todos</h1>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <div className={styles.compliteAll} onClick={compliteAllTodos}></div>
        <input
          className={styles.input}
          type="text"
          placeholder="What need to be done?"
          value={todoTitle}
          onChange={onChangeInput}
          autoFocus
        />
      </form>
    </header>
  );
};
