import { useSelector } from "react-redux";
import { useAppSelector } from "../../hooks";
import TodoItem from "../TodoItem/TodoItem";
import { getCompletedTasks, getUrgentTasks } from "../../store/Todo/selectors";
import { BlockTasks, List } from "./TodoList.styled";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.list);
  const completedTasks = useSelector(getCompletedTasks);
  const urgentTasks = useSelector(getUrgentTasks);

  return (
    <BlockTasks>
      <div>
        <h2>All Task</h2>
        <List>
          {todos?.length ? (
            todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
          ) : (
            <>No task</>
          )}
        </List>
      </div>
      <div>
        <h2>Urgent tasks</h2>
        <List>
          {urgentTasks?.length ? (
            urgentTasks.map((todo) => <TodoItem key={todo.id} {...todo} />)
          ) : (
            <>No urgent tasks</>
          )}
        </List>
      </div>
      <div>
        <h2>Completed Task</h2>
        <List>
          {completedTasks?.length ? (
            completedTasks.map((todo) => <TodoItem key={todo.id} {...todo} />)
          ) : (
            <>No completed task</>
          )}
        </List>
      </div>
    </BlockTasks>
  );
};

export default TodoList;
