import './App.css';
import ContactForm from './ContactForm/';
import ContactList from './ContactsList/';
import SearchInput from './SearchInput/';
import Section from './Section';

const App = () => {

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <SearchInput />
        <ContactList />
      </Section>
    </>
  );
}

export default App;
