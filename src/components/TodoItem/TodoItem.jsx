import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  editTodo,
  getCompletedTodo,
  removeTodo,
} from "../../store/redusers/rootReducer";

import styles from "./styles.module.css";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [editedTodo, setEditedTodo] = useState(todo.title);
  const [edit, setEdit] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(editTodo({ editedTodo, todo }));
  };

  const onChangeInput = (event) => {
    setEditedTodo(event.target.value);
  };

  const onBlurInput = () => {
    setEditedTodo(todo.title);
    setEdit(false);
  };

  return (
    <div className={styles.root} id={todo.id}>
      <button
        className={styles.checkbox}
        onClick={() => {
          dispatch(getCompletedTodo(todo));
        }}
      >
        <div className={!todo.isCompleted ? styles.circle : styles.done}></div>
      </button>
      {!edit ? (
        <>
          <div
            className={styles.todoTitle}
            onDoubleClick={() => {
              setEdit(true);
            }}
          >
            <label
              className={!todo.isCompleted ? styles.todo : styles.todoDone}
            >
              {todo.title}
            </label>
          </div>
          <button
            className={styles.closeButton}
            onClick={() => {
              dispatch(removeTodo(todo.id));
            }}
          >
            X
          </button>
        </>
      ) : (
        <form
          className={styles.form}
          onSubmit={(event) => {
            onFormSubmit(event);
            setEdit(false);
          }}
        >
          <input
            className={styles.input}
            type="text"
            value={editedTodo}
            onChange={onChangeInput}
            onBlur={onBlurInput}
          />
        </form>
      )}
    </div>
  );
};
