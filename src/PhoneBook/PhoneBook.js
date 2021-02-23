import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
      </div>
    );
  }
}

PhoneBook.propTypes = {};

export default PhoneBook;
