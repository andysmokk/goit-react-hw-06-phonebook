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
  // const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  // const [filter, setFilter] = useState('');

  // const deleteContact = contactId => {
  //   setContacts(prev => {
  //     return prev.filter(contact => contact.id !== contactId);
  //   });
  // };

  // const formSubmitHandler = contact => {
  //   setContacts([contact, ...contacts]);
  // };

  // const changeFilter = ({ target }) => {
  //   setFilter(target.value);
  // };

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalizedFilter),
  //   );
  // };
  // console.log(contacts.items);
  // console.log(contacts.filter);

  return (
    <div className={s.box}>
      <div>
        <h1 className={s.title}>Phonebook</h1>
        {/* <ContactForm onSubmit={onSubmit} contacts={contacts.items} /> */}
        {/* <ContactForm onSubmit={onSubmit} contacts={contacts.items} /> */}
        <ContactForm />
      </div>
      <div className={s.divBox}>
        <h2 className={s.title}>Contacts</h2>
        <div className={s.boxList}>
          <Filter />
          <ContactList
          // contacts={contacts.items}
          // contacts={getFilteredContacts()}
          // onDeleteContact={onDeleteContact}
          />
        </div>
      </div>
      {/* <div className={s.divBox}>
        <h2 className={s.title}>Contacts</h2>
        <div className={s.boxList}>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={getFilteredContacts()}
            onDeleteContact={onDeleteContact}
          />
        </div>
      </div> */}
    </div>
  );
}

export default Phonebook;

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     contacts: {
//       items: state.contacts.items,
//       filter: state.contacts.filter,
//     },
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: contactId => dispatch(actions.deleteContact(contactId)),
//     onSubmit: contact => dispatch(actions.submitContacts(contact)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
