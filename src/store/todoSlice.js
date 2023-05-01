import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todo: "", todoInputIsTouched: false, todos: [] },
  reducers: {
    todoChangeHandler(state, action) {
      state.todo = action.payload;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    resetValues(state) {
      state.todo = "";
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
