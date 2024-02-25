import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';

export const App = () => {
  return (
    <div className="wrapper">
      <h1 className="header">Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};
