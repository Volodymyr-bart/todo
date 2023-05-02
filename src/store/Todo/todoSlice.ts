import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  urgent: boolean;
  completed: boolean;
  createData: string;
};
type TodosState = {
  list: Todo[];
};

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
        urgent: false,
        createData: new Date().toISOString(),
      });
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find((list) => list.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleUrgentTodo(state, action: PayloadAction<string>) {
      const toggleUrgent = state.list.find(
        (todo) => todo.id === action.payload
      );
      if (toggleUrgent) {
        toggleUrgent.urgent = !toggleUrgent.urgent;
      }
    },
  },
});

export const { addTodo, toggleComplete, removeTodo, toggleUrgentTodo } =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;
