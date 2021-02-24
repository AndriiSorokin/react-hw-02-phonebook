import React from 'react';
import PropTypes from 'prop-types';
import style from '../PhoneBook/PhoneBook.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={style.form}>
      <p>Find contact by name</p>
      <input
        type="text"
        placeholder="Find"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
