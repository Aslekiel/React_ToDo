import { createSelector } from "reselect";

export const todosArray = (state) => state.todos.todos;
export const filterForTodos = (state) => state.filter.filter;

export const getFilteredTodos = createSelector(
  [todosArray, filterForTodos],
  (allTodos, filter) => {
    if (filter === "All") return allTodos;
    return allTodos.filter((item) => {
      if (filter === "Active") {
        return !item.isCompleted;
      }
      return item.isCompleted;
    });
  }
);
