// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { contactsReducer, contactsFilter } from './phonebook-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: contactsFilter,
// });

// const store = createStore(rootReducer, composeWithDevTools());
// console.log(process.env.NODE_ENV);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: contactsFilter,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
