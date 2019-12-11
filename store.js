import { createStore, combineReducers } from 'redux';

export const actions = {
  setContacts: payload => {
    return {
      type: 'SET',
      payload
    };
  },
  resetContacts: () => {
    return {
      type: 'RESET'
    };
  }
};

const contactsReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'RESET':
      return [];
    default:
      return state;
  }
};

const reducers = combineReducers({
  contacts: contactsReducer
});
export default () => createStore(combineReducers);
