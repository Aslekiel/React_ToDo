import { combineReducers } from "@reduxjs/toolkit";
import todos from "./todos";
import filter from "./filter";

export default combineReducers({
  todos: todos,
  filter: filter,
});
