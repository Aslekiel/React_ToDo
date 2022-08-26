export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";
export const DELETE_COMPLITED = "DELETE_COMPLITED";
export const EDIT_TODO = "EDIT_TODO";
export const COMPLETE_ALL_TODOS = "COMPLETE_ALL_TODOS";

export function addTodo(todoTitle) {
  return {
    type: ADD_TODO,
    title: todoTitle,
  };
}

export function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    id: todo.id,
  };
}

export function getCompletedTodo(todo) {
  return {
    type: COMPLETED_TODO,
    id: todo.id,
  };
}

export function deleteComplitedTodos() {
  return {
    type: DELETE_COMPLITED,
  };
}

export function editTodo(editedTodo, todo) {
  return {
    type: EDIT_TODO,
    editedTodo: editedTodo,
    id: todo.id,
  };
}

export function completeAllTodos(amountTodo) {
  return {
    type: COMPLETE_ALL_TODOS,
    amountTodo: amountTodo,
  };
}
