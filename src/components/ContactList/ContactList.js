// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook-actions';
import { getFilteredContacts } from '../../redux/phonebook-selectors';
import s from './ContactList.module.css';

// const getFilteredContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLocaleLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(normalizedFilter),
//   );
// };

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={s.ul}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.li} key={id}>
          {name}: {number}
          <button className={s.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// const getFilteredContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLocaleLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts, filter }) => ({
//   contacts: getFilteredContacts(contacts, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
