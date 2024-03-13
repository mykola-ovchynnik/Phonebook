import {
  ContactsHeader,
  Phonebook,
  PhonebookHeader,
} from './Phonebook/Phonebook.styled';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import Loader from './GlobalLoader/Loader';

const App = () => {
  return (
    <Phonebook>
      <Loader />
      <PhonebookHeader>Phonebook</PhonebookHeader>
      <ContactForm />

      <ContactsHeader>Contacts</ContactsHeader>
      <Filter />
      <ContactList />
    </Phonebook>
  );
};

export default App;
