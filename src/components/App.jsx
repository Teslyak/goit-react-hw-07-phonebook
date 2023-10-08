import { AddContact } from './AddContact/AddContact';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { DivWrap } from './App.styled';

export const App = () => {
  return (
    <DivWrap>
      <h1>Phonebook</h1>
      <AddContact  />
      <h2>Contacts</h2>
      <Filter />
      <ContactList
      />
    </DivWrap>
  );
};
