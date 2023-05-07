import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: { id: "", title: "" },
    todoInputIsTouched: false,
    todos: [],
    isEditing: false,
    editingTodo: { id: "", title: "" },
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
      state.todo = { id: "", title: "" };
    },
    removeTodo(state, action) {
      const id = action.payload;
      const filteredTodos = state.todos.filter((todo) => todo.id !== id);
      state.todos = filteredTodos;
    },
    editTodoForm(state, action) {
      state.isEditing = true;
      const editedTodo = action.payload;
      state.editingTodo = { id: editedTodo.id, title: editedTodo.title };
    },
    editChangeHandler(state, action) {
      state.editingTodo = action.payload;
    },
    editTodo(state, action) {
      console.log(action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
