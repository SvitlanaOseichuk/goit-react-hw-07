import React from 'react'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filtersSlice';
import ErrorMessage from '../ErrorMessage';
import { selectContactError} from '../../redux/contactsSlice';



const ContactList = () => {

  const error = useSelector(selectContactError);
  const filteredContacts = useSelector(selectFilteredContacts);
  

  return (
    <div>
      {error && <ErrorMessage />}
      <ul className={css.contactLIst} >
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.contact}>
            <Contact key={contact.id} data={contact} />
          </li>
        ))}
      </ul> 
    </div>
  );
};


export default ContactList
