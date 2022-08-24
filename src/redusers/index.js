import { nanoid } from "@reduxjs/toolkit";

export const rootReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: nanoid(),
          title: action.title,
          isComplited: false,
        },
      ];
  }
};
