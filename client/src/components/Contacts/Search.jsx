import React from 'react';
import './contacts.css';
import PropTypes from 'prop-types';
import { Form, Icon } from 'semantic-ui-react';

const options = [
  { key: 'i', text: 'IT', value: 'IT' },
  { key: 'r', text: 'Human Resources', value: 'RRHH' }
];

const Search = ({ hide }) => {
  if (hide) {
    return (
      <div className="search-hidden">
        <Icon name="add" size="large" />
        <Icon name="search" size="large" />
      </div>
    );
  } else {
    return (
      <div className="search-bar">
        <Form.Select
          fluid
          label="Department"
          options={options}
          placeholder="Department"
        />
        <Form.Input fluid label="Full Name" placeholder="Full Name" />
      </div>
    );
  }
};

Search.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func
};

export default Search;
