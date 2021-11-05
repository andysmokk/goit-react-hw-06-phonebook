import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import shortid from 'shortid';
import s from './ContactForm.module.css';

function ContactForm({ onSubmit, contacts }) {
  console.log(contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmitForm = e => {
    e.preventDefault();
    resetForm();
    checkContactList();
  };

  const onFormChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const addContact = () => {
    const newContactId = shortid.generate();
    const newContact = { name, number, id: newContactId };
    onSubmit(newContact);
  };

  const checkContactList = () => {
    const normalizedName = name.toLocaleLowerCase();
    contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName,
    )
      ? alert(`${name} is already in contacts`)
      : addContact();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={onSubmitForm}>
      <label className={s.label} htmlFor={shortid.generate()}>
        <span className={s.span}>Name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Григор Григорян"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onFormChange}
          id={shortid.generate()}
        />
      </label>
      <label className={s.label} htmlFor={shortid.generate()}>
        <span className={s.span}>Number</span>
        <input
          className={s.input}
          type="tel"
          name="number"
          placeholder="111-22-33"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onFormChange}
          id={shortid.generate()}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  console.log(state);
  return {
    contacts: state.contacts,
    // contacts: {
    //   items: state.contacts.items,
    //   filter: state.contacts.filter,
    // },
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onDeleteContact: contactId => dispatch(actions.deleteContact(contactId)),
    onSubmit: contact => dispatch(actions.submitContacts(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
