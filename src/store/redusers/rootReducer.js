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
      state.todos.forEach((item) => {
        if (action.payload.id !== item.id) {
          return;
        }
        item.isCompleted = !item.isCompleted;
      });
    },
    deleteComplitedTodos(state) {
      state.todos = state.todos.filter((item) => !item.isCompleted);
    },
    editTodo(state, action) {
      state.todos.forEach((item) => {
        if (action.payload.todo.id !== item.id) {
          return;
        }
        item.title = action.payload.editedTodo;
      });
    },
    completeAllTodos(state) {
      const checkTodosIsComplited = state.todos.every(
        (elem) => elem.isCompleted
      );
      state.todos.forEach((item) => {
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

// import { combineReducers, createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [],
//   filter: "All",
// };

// const todos = createSlice({
//   name: "todos",
//   initialState: initialState,
//   reducers: {
//     addTodo(state, action) {
//       state.todos.push({
//         id: nanoid(),
//         title: action.payload,
//         isCompleted: false,
//       });
//     },
//     removeTodo(state, action) {
//       state.todos = state.todos.filter((elem) => elem.id !== action.payload);
//     },
//     getCompletedTodo(state, action) {
//       state.todos.forEach((item) => {
//         if (action.payload.id !== item.id) {
//           return;
//         }
//         item.isCompleted = !item.isCompleted;
//       });
//     },
//     deleteComplitedTodos(state) {
//       state.todos = state.todos.filter((item) => !item.isCompleted);
//     },
//     editTodo(state, action) {
//       state.todos.forEach((item) => {
//         if (action.payload.todo.id !== item.id) {
//           return;
//         }
//         item.title = action.payload.editedTodo;
//       });
//     },
//     completeAllTodos(state) {
//       const checkTodosIsComplited = state.todos.every(
//         (elem) => elem.isCompleted
//       );
//       state.todos.forEach((item) => {
//         item.isCompleted = !checkTodosIsComplited;
//       });
//     },
//   },
// });

// const filter = createSlice({
//   name: "filter",
//   initialState: initialState,
//   reducers: {
//     changeFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const {
//   addTodo,
//   removeTodo,
//   getCompletedTodo,
//   deleteComplitedTodos,
//   editTodo,
//   completeAllTodos,
// } = todos.actions;

// export const { changeFilter } = filter.actions;

// export default combineReducers(todos, filter);
