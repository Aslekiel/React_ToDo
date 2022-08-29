import { createSelector } from "reselect";

export const todosArray = (state) => state.todos;
export const filterForTodos = (state) => state.filter;

export const todos = createSelector(
  [todosArray, filterForTodos],
  (allTodos, filter) => {
    return allTodos.filter((item) => {
      if (filter === "All") return allTodos;
      if (filter === "Active") {
        return !item.isCompleted;
      }
      return item.isCompleted;
    });
  }
);
