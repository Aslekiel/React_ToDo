import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./redusers";

const store = configureStore({ reducer: todos });

export default store;
