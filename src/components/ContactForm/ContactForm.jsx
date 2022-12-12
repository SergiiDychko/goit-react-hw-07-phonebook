import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../redux/slice';
import { useState } from 'react';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';

import Button from '../Button';
import { StyledForm } from './Styles';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();


  const addNewContact = () => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(add(newContact));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addNewContact();
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name': setName(value)
        break;
      case 'number': setNumber(value)
        break;
      default: return console.log('Something went wrong');
    }
  }

    return ( <StyledForm onSubmit={handleSubmit}>
        <label className="formLabel">
          <span className="labelTitle">Name:</span>
          <input
            className="inputTag"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            value={name}
            required
          />
        </label>
        <label className="formLabel">
          <span className="labelTitle">Number:</span>
          <input
            className="inputTag"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            value={number}
            required
          />
        </label>

        <Button title="Add contact" type="submit" />
      </StyledForm>
    );
  };


export default ContactForm;
