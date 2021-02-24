import React, { Component } from 'react';
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
    const { name } = contact;
    if (this.state.contacts.every(contact => !contact.name.includes(name))) {
      this.setState(prev => ({ contacts: [...prev.contacts, contact] }));
    } else {
      alert(`${name} is alredy contact!`);
    }
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

export default PhoneBook;
