import { FC } from "react";
// import { useAppDispatch } from "../hooks";

import { AppDispatch } from "../../store/store";
import {
  toggleComplete,
  removeTodo,
  toggleUrgentTodo,
} from "../../store/Todo/todoSlice";
import Item from "./TodoItem.styled";
import { useDispatch } from "react-redux";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  urgent: boolean;
  createData: string;
}

const TodoItem: FC<TodoItemProps> = ({
  id,
  title,
  completed,
  createData,
  urgent,
}) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <Item>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span>{createData}</span>
      {urgent ? (
        <span onClick={() => dispatch(toggleUrgentTodo(id))}>urgent</span>
      ) : (
        <span onClick={() => dispatch(toggleUrgentTodo(id))}>no urgent</span>
      )}
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </Item>
  );
};

export default TodoItem;
