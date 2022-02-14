import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
} from './phone-book-actions';

axios.defaults.baseURL = 'https://6203af0f4d21c200170b9f5a.mockapi.io/api/v1/';

export const fetchContacts = () => dispatch=>{ 
    dispatch(fetchContactsRequest());
    axios.get('/contacts')
        .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error =>dispatch(fetchContactsError(error)) )
}

export const addContact = ({ nick, number }) => dispatch => { 
  const contact = {
    nick: nick,
    number: number,
  }
  
    dispatch(addContactRequest());

  axios.post('/contacts', contact)
      .then(({ data }) => {
          dispatch(addContactSuccess(data))
      })
    .catch(error => dispatch(addContactError(error)))
}

export const deleteContact = id => dispatch => { 
    dispatch(deleteContactRequest());
    axios.delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)))
}
