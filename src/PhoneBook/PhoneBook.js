import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
  };

  addToList = contact => {
    this.setState(prev => ({ contacts: [...prev.contacts, contact] }));
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  filterUser = () => {
    const { name, filter } = this.state;
    return name.filter(names => names.text.toLowerCase().includes(filter.toLowerCase()));
  };

  deleteUser = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    // const visibleUser = this.filterUser();
    return (
      <div>
        <h1>PhoneBook</h1>
        <Form addToList={this.addToList} />
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <Contacts contacts={contacts} deleteContact={this.deleteUser} />
      </div>
    );
  }
}

PhoneBook.propTypes = {};

export default PhoneBook;
