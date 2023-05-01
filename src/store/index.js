import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./loginSlice";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: { login: loginSlice.reducer, todos: todoSlice.reducer },
});

export default store;
