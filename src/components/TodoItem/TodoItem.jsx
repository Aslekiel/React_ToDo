import React, { useState } from "react";
import styles from "./styles.module.css";

export const TodoItem = ({ todo, isComplitedTodo, removeTodo, editTodo }) => {
  const [editedTodo, setEditedTodo] = useState(todo.title);
  const [edit, setEdit] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    editTodo(editedTodo, todo);
  };

  const onChangeInput = (event) => {
    event.preventDefault();
    setEditedTodo(event.target.value);
  };

  const onBlurInput = (event) => {
    event.preventDefault();
    setEditedTodo(todo.title);
    setEdit(false);
  };

  return (
    <div className={styles.root} id={todo.id}>
      <button
        className={styles.checkbox}
        onClick={() => {
          isComplitedTodo(todo);
        }}
      >
        <div className={!todo.isComplited ? styles.circle : styles.done}></div>
      </button>
      <div
        className={edit ? styles.todoTitleOff : styles.todoTitle}
        onDoubleClick={() => {
          setEdit(true);
        }}
      >
        <label className={!todo.isComplited ? styles.todo : styles.todoDone}>
          {todo.title}
        </label>
      </div>

      <form
        className={!edit ? styles.formOff : styles.form}
        onSubmit={(event) => {
          onFormSubmit(event);
          setEdit(false);
        }}
      >
        <input
          className={styles.input}
          type="text"
          value={editedTodo}
          onChange={(event) => {
            onChangeInput(event);
          }}
          onBlur={(event) => {
            onBlurInput(event);
          }}
        />
      </form>

      <button
        className={edit ? styles.closeButtonOff : styles.closeButton}
        onClick={() => {
          removeTodo(todo);
        }}
      >
        X
      </button>
    </div>
  );
};
