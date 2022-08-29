import { combineReducers, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filter: "All",
};

const todos = createSlice({
  name: "todos",
  initialState: initialState.todos,
  reducers: {
    addTodo(state, action) {
      state.push({
        id: nanoid(),
        title: action.payload,
        isCompleted: false,
      });
    },
    removeTodo(state, action) {
      return (state = state.filter((elem) => elem.id !== action.payload));
    },
    getCompletedTodo(state, action) {
      state.forEach((item) => {
        if (action.payload.id !== item.id) {
          return;
        }
        item.isCompleted = !item.isCompleted;
      });
    },
    deleteComplitedTodos(state) {
      return (state = state.filter((item) => !item.isCompleted));
    },
    editTodo(state, action) {
      state.forEach((item) => {
        if (action.payload.todo.id !== item.id) {
          return;
        }
        item.title = action.payload.editedTodo;
      });
    },
    completeAllTodos(state) {
      const checkTodosIsComplited = state.every((elem) => elem.isCompleted);
      state.forEach((item) => {
        item.isCompleted = !checkTodosIsComplited;
      });
    },
  },
});

const filter = createSlice({
  name: "filter",
  initialState: initialState.filter,
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
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

export const { changeFilter } = filter.actions;

const rootReducer = combineReducers({
  todos: todos.reducer,
  filter: filter.reducer,
});

export default rootReducer;
