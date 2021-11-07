// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  deleteContact,
  submitContacts,
  changeFilter,
} from './phonebook-actions';

export const contactsReducer = createReducer([], {
  [submitContacts]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

export const contactsFilter = createReducer('', {
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
