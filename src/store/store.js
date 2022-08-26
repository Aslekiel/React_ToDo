import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redusers/rootReducer";

const store = configureStore({ reducer: rootReducer });

export default store;
