import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/addContact', (nick, number) => {
  return {
    payload: {
      id: nanoid(),
      nick: nick,
      number: number,
    },
  };
});
export const deleteContact = createAction('phonebook/deleteContact');
export const changeFilter = createAction('phonebook/changeFilter');