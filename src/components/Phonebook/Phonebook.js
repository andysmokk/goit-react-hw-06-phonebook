// import { useState } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/actions';
// import defaultContacts from './defaultContacts.json';
import s from './Phonebook.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
// import useLocalStorage from '../../hooks/useLocalStorage';

function Phonebook() {
  return (
    <div className={s.box}>
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={s.divBox}>
        <h2 className={s.title}>Contacts</h2>
        <div className={s.boxList}>
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default Phonebook;
