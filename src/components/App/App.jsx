import { ToastContainer } from 'react-toastify';
import { MainBox } from './App.styled';
import Section from 'components/Section/Section';
import Form from 'components/PhoneForm/PhoneForm';
import FilterContacts from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

const App = () => {
  return (
    <MainBox>
      <Form />
      <Section title="Contacts">
        <FilterContacts />
        <ContactsList />
      </Section>
      <ToastContainer autoClose={2500} />
    </MainBox>
  );
};
export default App;
