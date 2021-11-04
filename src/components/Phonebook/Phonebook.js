import { useState } from 'react';
import defaultContacts from './defaultContacts.json';
import s from './Phonebook.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import useLocalStarage from '../../hooks/useLocalStarage';

export default function Phonebook() {
  const [contacts, setContacts] = useLocalStarage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  const deleteContact = contactId => {
    setContacts(prev => {
      return prev.filter(contact => contact.id !== contactId);
    });
  };

  const formSubmitHandler = contact => {
    setContacts([contact, ...contacts]);
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <div className={s.box}>
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} contacts={contacts} />
      </div>
      <div className={s.divBox}>
        <h2 className={s.title}>Contacts</h2>
        <div className={s.boxList}>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={getFilteredContacts()}
            onDeleteContact={deleteContact}
          />
        </div>
      </div>
    </div>
  );
}
