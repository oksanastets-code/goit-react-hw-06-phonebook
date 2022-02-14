import toast from 'react-hot-toast';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  // deleteContact,
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './phone-book-actions';

// import initialContacts from '../../Phonebook/contacts.json';

const contacts = createReducer([],
  // initialContacts,
  {
    [fetchContactsSuccess]: (state, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => { 
         if (state.find(contact => contact.nick === payload.nick)) {
        const notify = `${payload.nick} is already on list`;
        toast.error(notify);
        return state;
      }
      state = [...state, payload];
      toast.success(`Contact ${payload.nick} added!`);
      return state;
    },
    [deleteContactSuccess]: (state, {payload}) => state.filter(({ id }) => id !== payload),
})

const filter = createReducer('', {
    [changeFilter]: (_, {payload})=> payload,
})
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
 
})
export default combineReducers({
  contacts,
  filter,
  loading,
});
