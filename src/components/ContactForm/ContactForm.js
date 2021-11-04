import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit, contacts }) {
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

// class OldContactForm extends Component {
//   static propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.object),
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   addContact = () => {
//     const { name, number } = this.state;
//     const { onSubmit } = this.props;
//     const newContactId = shortid.generate();
//     const newContact = { name, number, id: newContactId };
//     onSubmit(newContact);
//   };

//   checkContactList = () => {
//     const { contacts } = this.props;
//     const { name } = this.state;
//     const normalizedName = name.toLocaleLowerCase();
//     contacts.find(
//       contact => contact.name.toLocaleLowerCase() === normalizedName,
//     )
//       ? alert(`${name} is already in contacts`)
//       : this.addContact();
//   };

//   onFormChange = ({ target }) => {
//     const { name, value } = target;

//     this.setState({
//       [name]: value,
//     });
//   };

//   onSubmitForm = e => {
//     e.preventDefault();
//     this.resetForm();
//     this.checkContactList();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={s.form} onSubmit={this.onSubmitForm}>
//         <label className={s.label} htmlFor={this.nameInputId}>
//           <span className={s.span}>Name</span>
//           <input
//             className={s.input}
//             type="text"
//             name="name"
//             placeholder="Григор Григорян"
//             value={name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             onChange={this.onFormChange}
//             id={shortid.generate()}
//           />
//         </label>
//         <label className={s.label} htmlFor={this.numberInputId}>
//           <span className={s.span}>Number</span>
//           <input
//             className={s.input}
//             type="tel"
//             name="number"
//             placeholder="111-22-33"
//             value={number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             onChange={this.onFormChange}
//             id={shortid.generate()}
//           />
//         </label>
//         <button className={s.btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
