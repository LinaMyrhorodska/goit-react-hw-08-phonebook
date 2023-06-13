import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter'; 
import { ContactList } from 'components/ContactList/ContactList'; 
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { ContactDiv } from './ContactPage.styled';
import { Loader } from 'components/Loader/Loader';

const ContactPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <main>
      <ContactDiv>
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
        {isLoading && !error && <Loader/>}
        <ContactList />
      </ContactDiv>
    </main>
  );
};

export default ContactPage;