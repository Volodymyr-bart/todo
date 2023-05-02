import { FC } from "react";
import { Button } from "@mui/material";
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
          <Button variant="contained" onClick={handleAction}>Add todo</Button>
          
        </label>
      </NewTodoFormStyled>
    </div>
  );
};

export default NewTodoForm;
