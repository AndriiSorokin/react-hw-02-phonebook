import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search contact"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {};

export default Filter;
