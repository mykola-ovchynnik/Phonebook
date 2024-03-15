import { Header, Phonebook } from './Phonebook/Phonebook.styled';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { GlobalLoader } from './GlobalLoader/GlobalLoader';

const App = () => {
  return (
    <Phonebook>
      <GlobalLoader />

      <Header>Phonebook</Header>
      <ContactForm />

      <Header>Contacts</Header>
      <Filter />
      <ContactList />
    </Phonebook>
  );
};

export default App;
