import { createAction } from '@reduxjs/toolkit';

// import { DELETE, SUBMIT, CHANGE_FILTER } from './phonebook-types';

export const deleteContact = createAction('contact/delete');
export const submitContacts = createAction('contact/submit');
export const changeFilter = createAction('contact/changeFilter');
// export const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// export const submitContacts = contact => ({
//   type: SUBMIT,
//   payload: contact,
// });

// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
