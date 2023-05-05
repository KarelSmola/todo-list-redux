import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: "",
    todoInputIsTouched: false,
    todos: [],
    isEditing: false,
  },
  reducers: {
    fetchTodos(state, action) {
      state.todos = action.payload;
    },
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
    editTodo(state) {
      state.isEditing = true;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
