import {
  ADD_TODO,
  COMPLETED_TODO,
  COMPLETE_ALL_TODOS,
  DELETE_COMPLITED,
  EDIT_TODO,
  REMOVE_TODO,
} from "../actions/actions";
import { nanoid } from "@reduxjs/toolkit";

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: nanoid(),
          title: action.title,
          isComplited: false,
        },
      ];

    case REMOVE_TODO:
      return state.filter((elem) => elem.id !== action.id);

    case COMPLETED_TODO:
      return state.map((item) =>
        action.id === item.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );

    case DELETE_COMPLITED:
      return state.filter((item) => !item.isCompleted);

    case EDIT_TODO:
      return state.map((item) =>
        action.id === item.id ? { ...item, title: action.editedTodo } : item
      );

    case COMPLETE_ALL_TODOS:
      return state.map((item) => {
        return !action.amountTodo
          ? { ...item, isCompleted: false }
          : { ...item, isCompleted: true };
      });

    default:
      return state;
  }
};
