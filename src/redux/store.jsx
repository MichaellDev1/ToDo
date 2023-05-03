import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/todoReducer";

const store = configureStore({
  reducer: {
    todolist: todoReducer,
  },
});

export default store;
