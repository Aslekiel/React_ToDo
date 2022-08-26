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
      return {
        todos: [
          ...state.todos,
          {
            id: nanoid(),
            title: action.payload,
            isComplited: false,
          },
        ],

        filter: "All",
      };
    },
    removeTodo(state, action) {
      return {
        todos: [...state.todos.filter((elem) => elem.id !== action.payload)],
        filter: "All",
      };
    },
    getCompletedTodo(state, action) {
      return {
        todos: [
          ...state.todos.map((item) =>
            action.payload.id === item.id
              ? { ...item, isCompleted: !item.isCompleted }
              : item
          ),
        ],
        filter: "All",
      };
    },
    deleteComplitedTodos(state) {
      return {
        todos: [...state.todos.filter((item) => !item.isCompleted)],
        filter: "All",
      };
    },
    editTodo(state, action) {
      return {
        todos: [
          ...state.todos.map((item) =>
            action.payload.todo.id === item.id
              ? { ...item, title: action.payload.editedTodo }
              : item
          ),
        ],
        filter: "All",
      };
    },
    completeAllTodos(state) {
      const checkTodosIsComplited = state.todos.every(
        (elem) => elem.isCompleted
      );
      return {
        todos: [
          ...state.todos.map((item) => {
            return { ...item, isCompleted: !checkTodosIsComplited };
          }),
        ],
        filter: "All",
      };
    },
    changeFilter(state, action) {
      return {
        todos: [...state.todos],
        filter: action.payload,
      };
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
