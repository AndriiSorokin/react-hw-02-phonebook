import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import style from '../PhoneBook/PhoneBook.module.css';

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
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
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
    const visibleUser = this.filterUser();
    return (
      <div className={style.container}>
        <h1>PhoneBook</h1>
        <Form addToList={this.addToList} />
        {contacts.length > 2 ? <Filter value={filter} onChangeFilter={this.changeFilter} /> : ''}
        <Contacts contacts={visibleUser} deleteContact={this.deleteUser} />
      </div>
    );
  }
}

PhoneBook.propTypes = {
  addToList: PropTypes.func,
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default PhoneBook;
