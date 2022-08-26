import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, completeAllTodos } from "../../store/redusers/todos";

import styles from "./styles.module.css";

export const Header = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!todoTitle.trim()) return;
    dispatch(addTodo(todoTitle));
    setTodoTitle("");
  };

  const onChangeInput = (event) => {
    setTodoTitle(event.target.value);
  };

  return (
    <header className={styles.root}>
      <h1>todos</h1>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <div
          className={styles.compliteAll}
          onClick={() => {
            dispatch(completeAllTodos());
          }}
        ></div>
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
