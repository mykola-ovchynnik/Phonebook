import { ContactItem, DeleteButton, List } from './ContactList.styled.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'store/selectors.js';
import { deleteContactThunk, getAllContactsThunk } from 'store/thunk.js';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <List>
      {contacts &&
        contacts.map(contact => (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.phone}
            <DeleteButton
              onClick={() => dispatch(deleteContactThunk(contact.id))}
            >
              Delete
            </DeleteButton>
          </ContactItem>
        ))}
    </List>
  );
};

export default ContactList;
