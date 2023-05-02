import { FC } from "react";
import NewTodoFormStyled from "./NewTodoForm.styled";
interface NewTodoFormProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}
const NewTodoForm: FC<NewTodoFormProps> = ({
  value,
  updateText,
  handleAction,
}) => {
  return (
    <div>
      <NewTodoFormStyled>
        <label>
          <input
            placeholder="new todo"
            value={value}
            onChange={(e) => updateText(e.target.value)}
          />
          <button onClick={handleAction}>Add todo</button>
        </label>
      </NewTodoFormStyled>
    </div>
  );
};

export default NewTodoForm;
