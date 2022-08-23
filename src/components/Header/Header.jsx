import React from "react";
import styles from "./styles.module.css";

export const Header = ({ todo, setTodo, addNewTodo }) => {
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
          value={todo}
          onChange={(event) => {
            event.preventDefault();
            setTodo(event.target.value);
          }}
        />
      </form>
    </header>
  );
};
