import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redusers";

const store = configureStore({ reducer: { counter: rootReducer } });

export default store;
