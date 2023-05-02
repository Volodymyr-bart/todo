import { useSelector } from "react-redux";
import { useAppSelector } from "../../hooks";
import TodoItem from "../TodoItem";
import { getCompletedTasks } from "../../store/Todo/selectors";
import { BlockTasks } from "./TodoList.styled";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.list);
  const completedTasks = useSelector(getCompletedTasks);

  return (
    <BlockTasks>
      <div>
        <h2>All Task</h2>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
      <div>
        <h2>Completed Task</h2>
        <ul>
          {completedTasks?.length ? (
            completedTasks.map((todo) => <TodoItem key={todo.id} {...todo} />)
          ) : (
            <>No completed task</>
          )}
        </ul>
      </div>
    </BlockTasks>
  );
};

export default TodoList;
