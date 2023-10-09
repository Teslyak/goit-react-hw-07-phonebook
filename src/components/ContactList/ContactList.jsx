import { ContactListItem } from 'components/ContactListIthem/ContactListItem';
import { deleteContacts } from 'components/Redux/contactsSlice';
import { fetchContacts } from 'components/Redux/operations';
import { selectContacts, selectisFilter } from 'components/Redux/selectors';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectisFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts(controller.signal));

    return () => {
      console.log(controller);
      return controller.abort();
    };
  }, [dispatch]);

  const getFilterText = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <>
      <ul>
        {getFilterText().map(el => (
          <ContactListItem
            onDeleteContact={() => handleDelete(el.id)}
            item={el}
            key={el.id}
          />
        ))}
      </ul>
    </>
  );
};
