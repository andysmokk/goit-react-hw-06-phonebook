// import { combineReducers } from 'redux';
import { CHANGE_FILTER, DELETE, SUBMIT } from './phonebook-types';

export const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SUBMIT:
      return [...state, payload];

    case DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

export const contactsFilter = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};
