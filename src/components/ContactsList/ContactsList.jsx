import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { deleteContact } from 'redux/contactsSlice';
import { getFilteredContacts } from 'redux/filterSlice';
import { ListOfContact, Items, ItemButton } from './ContactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();
  const { numbers } = useSelector(getContacts);
  const filter = useSelector(getFilteredContacts);

  const getVisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts(numbers, filter);

  if (visibleContacts.length === 0) {
    return <p>You haven't added any contacts yet</p>;
  }

  return visibleContacts.map(({ id, name, number }) => {
    return (
      <ListOfContact key={id}>
        <Items>
          {name}: {number}
          <ItemButton type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ItemButton>
        </Items>
      </ListOfContact>
    );
  });
};

export default ContactsList;
