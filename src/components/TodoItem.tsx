import { FC } from "react";
// import { useAppDispatch } from "../hooks";

import store from "../store/store";
import { toggleComplete, removeTodo } from "../store/Todo/todoSlice";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: FC<TodoItemProps> = ({ id, title, completed }) => {
  // const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => store.dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span onClick={() => store.dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
