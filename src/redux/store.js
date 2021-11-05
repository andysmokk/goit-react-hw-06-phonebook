import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

// const reducer = (state = initialState, { type, payload }) => {
//   //   console.log(state);
//   console.log(type);
//   console.log(payload);

//   switch (type) {
//     case 'contact/submit':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...state.contacts.items, payload],
//         },
//         // contacts: {
//         //   items: [...state.contacts.items, payload],
//         // },
//       };

//     case 'contact/delete':
//       return state.contacts.items.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const contactsInitialState = {
//   items: [],
//   filter: '',
// };

const contactsReducer = (state = [], { type, payload }) => {
  console.log(state);
  switch (type) {
    case 'contact/submit':
      return [...state, payload];
    // {
    //   ...state,
    //   items: [...state.items, payload],
    // };

    case 'contact/delete':
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
