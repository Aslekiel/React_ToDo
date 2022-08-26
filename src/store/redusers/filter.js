import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "All",
};

const filter = createSlice({
  name: "filter",
  initialState: initialState.filter,
  reducers: {
    changeFilter(state, action) {
      return (initialState.filter = action.payload);
    },
  },
});

export const { changeFilter } = filter.actions;

export default filter.reducer;
