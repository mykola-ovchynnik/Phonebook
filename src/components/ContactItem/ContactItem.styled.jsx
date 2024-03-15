import styled from 'styled-components';

export const ContactItem = styled.li`
  min-width: max-content;
  color: inherit;
  font-size: 18px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  background-color: #21719311;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
`;

export const DeleteButton = styled.button`
  background-color: #ff6347;
  color: white;
  font-size: 16px;
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
