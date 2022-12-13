import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations';

import ContactItem from './ContactItem';
import { StyledList } from './Styles';
import Notification from '../Notification';
import Button from '../Button';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {dispatch(fetchContacts())}, [dispatch])

  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contactsList = filter ? filteredContacts() : contacts;

  return contactsList.length ? (
    <StyledList>
      {contactsList.map(({ id, name, phone }) => (
        <li className="listItem" key={id}>
          <ContactItem name={name} number={phone} />
          <Button title="Delete" onClick={() => dispatch(deleteContact(id))} />
        </li>
      ))}
    </StyledList>
  ) : (
    <Notification
      text={filter ? 'Could not find this name' : 'Contact list is empty'}
    />
  );
};

export default ContactList;
