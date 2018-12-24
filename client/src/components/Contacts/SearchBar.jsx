import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const SearchBar = ({ isSearching, options }) => {
  if (isSearching) {
    return (
      <div className="search-bar">
        <Form.Select
          fluid
          label="Department"
          options={options}
          placeholder="Select a department"
        />
        <Form.Input fluid label="Full Name" placeholder="Full Name" />
      </div>
    );
  }
  return null;
};

SearchBar.propTypes = {
  isSearching: PropTypes.bool,
  options: PropTypes.array
};

export default SearchBar;
