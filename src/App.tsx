import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { addTodo } from "./store/Todo/todoSlice";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

import "./App.css";
import Main from "./App.styled";

function App() {
  const [text, setText] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="App">
      <header>Todo</header>
      <Main>
        <NewTodoForm
          value={text}
          updateText={setText}
          handleAction={handleAction}
        />
        <TodoList />
      </Main>
    </div>
  );
}

export default App;
