import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/tasksSlice"

export const store = configureStore({
  reducer: {
    tasks : taskReducer
  },
});
