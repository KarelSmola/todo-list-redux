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
    removeTodo(state, action) {
      const id = action.payload;
      const filteredTodos = state.todos.filter((todo) => todo.id !== id);
      state.todos = filteredTodos;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
