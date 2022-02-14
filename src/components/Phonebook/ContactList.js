import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../redux/PhoneBook/phone-book-operations';
import { getFoundedContacts } from 'components/redux/PhoneBook/phone-book-selectors';
import {
  ListWrapper,
  ContactItem,
  List,
  ContactData,
  DeleteButton,
} from './ContactList.styled';
import { useEffect } from 'react';

export default function ContactList() {
  const contacts = useSelector(state => getFoundedContacts(state));
  const dispatch = useDispatch();

  const onFetchContacts = () => dispatch(fetchContacts());
  const onDeleteContact = id => dispatch(deleteContact(id));
  useEffect(() => {onFetchContacts() }, [])
  return (
    <ListWrapper>
      <List>
        {contacts.map(({ id, nick, number }) => (
          <ContactItem key={id}>
            <ContactData>
              {nick}: {number}
            </ContactData>
            <DeleteButton onClick={() => onDeleteContact(id)}>
              Delete
            </DeleteButton>
          </ContactItem>
        ))}
      </List>
    </ListWrapper>
  )
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nick: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};