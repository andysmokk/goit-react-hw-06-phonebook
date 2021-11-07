// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  deleteContact,
  submitContacts,
  changeFilter,
} from './phonebook-actions';
import defaultContacts from '../json/defaultContacts.json';

export const contactsReducer = createReducer(defaultContacts, {
  [submitContacts]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

// export const contactsFilter = (state = '', { type, payload }) => {
//   switch (type) {
//     case changeFilter:
//       return payload;

//     default:
//       return state;
//   }
// };

// export const contactsReducer = (state = [], { type, payload }) => {
//   console.log(type);
//   switch (type) {
//     case submitContacts:
//       return [...state, payload];

//     case deleteContact:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };
