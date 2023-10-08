import { ContactListItem } from 'components/ContactListIthem/ContactListItem'
import { deleteContacts } from 'components/Redux/contactsSlice';
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
export const ContactList = () => {
    const contacts = useSelector(state => state.contacts);    
    const filter = useSelector(state => state.filter);    
    const dispatch = useDispatch();
    
    const getFilterText = () => {     
        const normalizedFilter = filter.toLowerCase().trim();        
        return contacts.filter(el => {        
            return el.name.toLowerCase().includes(normalizedFilter);            
        });        
    };

    
    const handleDelete = (id) => {      
        dispatch(deleteContacts(id));
        
  };
   
    return (
        <>   
        <ul>
            {getFilterText().map(el => (
                <ContactListItem onDeleteContact={() => handleDelete(el.id)} item={el} key={el.id}  />
            ))}
            </ul>
        </>
   )
 
}


