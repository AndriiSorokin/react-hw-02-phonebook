import React from 'react';
import PropTypes from 'prop-types';
import style from '../PhoneBook/PhoneBook.module.css';

const Contacts = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name} : {contact.phone}
            </span>
            <button
              className={style.btnDelete}
              onClick={() => deleteContact(contact.id)}
              type="button"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
