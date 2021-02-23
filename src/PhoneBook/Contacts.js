import React from 'react';
import PropTypes from 'prop-types';

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
            <button onClick={() => deleteContact(contact.id)} type="button">
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {};

export default Contacts;
