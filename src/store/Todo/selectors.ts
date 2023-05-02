import { RootState } from "../store";

export const getCompletedTasks = (state: RootState) => {
  if (state.todos.list.length) {
    return state.todos.list.filter((todo) => todo.completed);
  }
};
export const getUrgentTasks = (state: RootState) => {
  if (state.todos.list.length) {
    return state.todos.list.filter((todo) => todo.urgent === true);
  }
};
