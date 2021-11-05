import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactsReducer, contactsFilter } from './phonebook-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: contactsFilter,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
