import { useState } from 'react';
import { Form, FormLabel, LabelName, FormInput, FormBtn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

  const existingContact = contacts.find(contact => contact.name === name);
  const existingContactNumber = contacts.find(contact => contact.number === number);

  if (existingContact) {
    alert(`${name} is already in contacts.`);
    return;
  };

  if (existingContactNumber) {
    alert('This phone number is already in contacts.');
    return;
  };

  const contact = {
    id: nanoid(),
    name,
    number,
  };
    dispatch(addContact(contact));
    resetForm();
  };

    return (
            <Form onSubmit={handleSubmit}>
                <FormLabel>
                    <LabelName>Name</LabelName>
                    <FormInput
                    onChange={handleChange}
                    type="text"
                    value={name}
                    name="name"
                    autoComplete="off"
                    pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </FormLabel>
                <FormLabel>
                    <LabelName>Number</LabelName>
                    <FormInput
                    onChange={handleChange}
                    type="tel"
                    value={number}
                    name="number"
                    autoComplete="off"
                    pattern="\+?\d{1,4}?[\-\.\s]?\(?\d{1,3}?\)?[\-\.\s]?\d{1,4}[\-\.\s]?\d{1,4}[\-\.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </FormLabel>
                <FormBtn type="submit">Add contact</FormBtn>
            </Form>
      )
};
