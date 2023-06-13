import { ContactItem, ContactName, ContactNumber, ContactBtn, List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts} from '../../redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { useEffect } from 'react';

export const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
    
  return (
        <List>
            {filteredContacts.map(contact => {
                return (
                    <ContactItem key={contact.id}>
                        <ContactName>{contact.name}:</ContactName>
                        <ContactNumber>{contact.number}</ContactNumber>
                        <ContactBtn type="button" onClick={() => handleDelete(contact.id)}>
                           Delete
                        </ContactBtn>
                    </ContactItem>)
            })}
        </List>
    )
};
