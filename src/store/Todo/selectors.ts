import { RootState } from "../store";

export const todoComplete = [];

export const getCompletedTasks = (state: RootState) => {
  if (state.todos.list.length) {
    return state.todos.list.filter((todo) => todo.completed);
  }
};
