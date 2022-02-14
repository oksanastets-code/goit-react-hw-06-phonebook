import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/PhoneBook/phone-book-actions';
import { getFoundedContacts } from 'components/redux/PhoneBook/phone-book-selectors';
import {
  ListWrapper,
  ContactItem,
  List,
  ContactData,
  DeleteButton,
} from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(state => getFoundedContacts(state));
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

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