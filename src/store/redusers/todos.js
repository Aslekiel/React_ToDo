import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todos = createSlice({
  name: "todos",
  initialState: initialState.todos,
  reducers: {
    addTodo(state, action) {
      return [
        ...state,
        {
          id: nanoid(),
          title: action.payload,
          isComplited: false,
        },
      ];
    },
    removeTodo(state, action) {
      return state.filter((elem) => elem.id !== action.payload);
    },
    getCompletedTodo(state, action) {
      return state.map((item) =>
        action.payload.id === item.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    },
    deleteComplitedTodos(state) {
      return state.filter((item) => !item.isCompleted);
    },
    editTodo(state, action) {
      return state.map((item) =>
        action.payload.todo.id === item.id
          ? { ...item, title: action.payload.editedTodo }
          : item
      );
    },
    completeAllTodos(state) {
      const checkTodosIsComplited = state.every((elem) => elem.isCompleted);
      return state.map((item) => {
        return !checkTodosIsComplited
          ? { ...item, isCompleted: true }
          : { ...item, isCompleted: false };
      });
    },
  },
});

export const {
  addTodo,
  removeTodo,
  getCompletedTodo,
  deleteComplitedTodos,
  editTodo,
  completeAllTodos,
} = todos.actions;

export default todos.reducer;
