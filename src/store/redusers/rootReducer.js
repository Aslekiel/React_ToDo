import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filter: "All",
};

const rootReduser = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: nanoid(),
        title: action.payload,
        isCompleted: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload);
    },
    getCompletedTodo(state, action) {
      state.todos.map((item) =>
        action.payload.id === item.id
          ? (item.isCompleted = !item.isCompleted)
          : item
      );
    },
    deleteComplitedTodos(state) {
      state.todos = state.todos.filter((item) => !item.isCompleted);
    },
    editTodo(state, action) {
      state.todos.map((item) =>
        action.payload.todo.id === item.id
          ? (item.title = action.payload.editedTodo)
          : item
      );
    },
    completeAllTodos(state) {
      const checkTodosIsComplited = state.todos.every(
        (elem) => elem.isCompleted
      );
      state.todos.map((item) => {
        item.isCompleted = !checkTodosIsComplited;
      });
    },
    changeFilter(state, action) {
      state.filter = action.payload;
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
  changeFilter,
} = rootReduser.actions;

export default rootReduser.reducer;
