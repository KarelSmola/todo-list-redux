import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: { id: "", title: "" },
    todoInputIsTouched: false,
    todoInput: "",
    todos: [],
    isEditing: false,
    editingTodo: { id: "", title: "" },
    newTodo: false,
  },
  reducers: {
    fetchTodos(state, action) {
      state.todos = action.payload;
    },
    todoChangeHandler(state, action) {
      state.todo = action.payload;
      state.todoInput = action.payload;
    },
    todoBlurHandler(state) {
      state.todoInputIsTouched = true;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
      state.newTodo = true;
    },
    resetValues(state) {
      state.todo = { id: "", title: "" };
      state.todoInput = "";
      state.todoInputIsTouched = false;
    },
    removeTodo(state, action) {
      const id = action.payload;
      const filteredTodos = state.todos.filter((todo) => todo.id !== id);
      state.todos = filteredTodos;
    },
    editTodo(state, action) {
      state.isEditing = true;
      state.editingTodo = { ...action.payload };
    },
    editChangeHandler(state, action) {
      state.editingTodo = action.payload;
    },
    saveEditingTodo(state, action) {
      const editingTodoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[editingTodoIndex].title = action.payload.title;
      state.isEditing = false;
    },
    cancelEditForm(state) {
      state.isEditing = false;
    },
    removeAllTodos(state) {
      state.todos = [];
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
