export const deleteContact = id => ({
  type: 'contact/delete',
  payload: id,
});

export const submitContacts = contact => ({
  type: 'contact/submit',
  payload: contact,
});
