import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => {
  console.log(contacts);
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {};

export default Contacts;
