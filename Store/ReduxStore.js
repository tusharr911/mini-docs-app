import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./TodoSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authReducer,
  },
});
