import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducer: {
    addTodo(state, action) {
     state.todos =  state.todos.push(action.payload.todo)
    },
  },
});

export const todoActions = todoSlice.actions
export default todoSlice
