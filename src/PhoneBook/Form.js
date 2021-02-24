import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import style from '../PhoneBook/PhoneBook.module.css';

class Form extends Component {
  state = {
    name: '',
    phone: '',
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const singleContact = {
      name: this.state.name,
      phone: this.state.phone,
      id: uuidv4(),
    };
    this.props.addToList(singleContact);
    this.reset();
    console.log(singleContact);
  };

  reset = () => {
    this.setState({
      name: '',
      phone: '',
    });
  };

  render() {
    const { name, phone } = this.state;
    return (
      <form className={style.form} onSubmit={this.submitHandler} autoComplete="off">
        <input
          onChange={this.inputHandler}
          placeholder="Enter name"
          type="text"
          name="name"
          value={name}
        ></input>
        <input
          onChange={this.inputHandler}
          placeholder="Enter phone"
          type="text"
          name="phone"
          value={phone}
        ></input>
        <button className={style.btn} type="submit">
          Add contacts
        </button>
      </form>
    );
  }
}

Form.propTypes = {};

export default Form;
