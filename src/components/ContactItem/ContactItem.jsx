import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/thunk';
import {
  ContactInfoWrapper,
  ContactItem,
  DeleteButton,
} from './ContactItem.styled';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <ContactInfoWrapper>
        <p>{contact.name}</p>
        <p>{contact.phone}</p>
      </ContactInfoWrapper>

      <DeleteButton onClick={() => dispatch(deleteContactThunk(contact.id))}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};
