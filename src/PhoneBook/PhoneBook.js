import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Contacts from './Contacts';

class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addToList = contact => {
    this.setState(prev => ({ contacts: [...prev.contacts, contact] }));
  };
  
  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <Form addToList={this.addToList} />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

PhoneBook.propTypes = {};

export default PhoneBook;
