import { RootState } from "../store";

export const getAllTask = (state: RootState) => {
  return state.todos.list;
};

export const getCurrentTask = (state: RootState) => {
  if (state.todos.list.length) {
    return state.todos.list.filter((todo) => !todo.completed);
  }
};

export const getCompletedTasks = (state: RootState) => {
  if (state.todos.list.length) {
    console.log(state.todos.list.filter((todo) => todo.completed));

    return state.todos.list.filter((todo) => todo.completed);
  }
};
export const getUrgentTasks = (state: RootState) => {
  if (state.todos.list.length) {
    return state.todos.list.filter((todo) => todo.urgent);
  }
};
