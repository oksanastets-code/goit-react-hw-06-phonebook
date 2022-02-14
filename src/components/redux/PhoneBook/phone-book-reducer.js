import toast from 'react-hot-toast';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {addContact, deleteContact, changeFilter } from './phone-book-actions';
import initialContacts from '../../Phonebook/contacts.json';

const contacts = createReducer(initialContacts, {
    [addContact]: (state, { payload }) => { 
         if (state.find(contact => contact.nick === payload.nick)) {
        const notify = `${payload.nick} is already on list`;
        toast.error(notify);
        return state;
      }
      state = [...state, payload];
      toast.success('Contact added!');
      return state;
    },
    [deleteContact]: (state, {payload}) => state.filter(({ id }) => id !== payload),
})

const filter = createReducer('', {
    [changeFilter]: (_, {payload})=> payload,
})

export default combineReducers({
  contacts,
  filter,
});
