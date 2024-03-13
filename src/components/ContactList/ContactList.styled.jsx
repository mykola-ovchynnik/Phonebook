import { styled } from 'styled-components';

export const List = styled.ul`
  max-width: 400px;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #217093;
  list-style: circle;
`;

export const ContactItem = styled.li`
  min-width: max-content;
  color: inherit;
  font-size: 18px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  background-color: #2171932b;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const DeleteButton = styled.button`
  margin-left: 10px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 10px;
  cursor: pointer;

  transition: transforme 0.1s ease-in-out, background-color 0.2s ease-out;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #217093;
  }

  &:active {
    transform: scale(0.98);
  }
`;
