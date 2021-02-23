import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

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
    console.log(singleContact);
  };
  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.submitHandler} autoComplete="off">
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
        <button type="submit">Add contacts</button>
      </form>
    );
  }
}

Form.propTypes = {};

export default Form;
