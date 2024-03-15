import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'store/selectors.js';
import { useEffect } from 'react';
import { ContactListItem } from 'components/ContactItem/ContactItem.jsx';
import { getAllContactsThunk } from 'store/thunk';
import { List } from './ContactList.styled';

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
          <ContactListItem key={contact.id} contact={contact} />
        ))}
    </List>
  );
};

export default ContactList;
