import styled from "styled-components";

const Item = styled.li`
  display: grid;
  grid-template-columns: 0.5fr 2fr 2fr 1fr 0.5fr;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: pink;
  padding: 5px;
  border-radius: 20px;
`;

export default Item;
