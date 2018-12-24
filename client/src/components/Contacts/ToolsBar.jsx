import React from 'react';
import './contacts.css';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const ToolsBar = ({ toggleToolsBar, openCreateModal }) => {
  return (
    <ul className="tools-bar">
      <li onClick={toggleToolsBar}>
        <Icon name="search" size="large" />
      </li>
      <li onClick={openCreateModal}>
        <Icon name="add" size="large" />
      </li>
    </ul>
  );
};

ToolsBar.propTypes = {
  isSearching: PropTypes.bool,
  filter: PropTypes.string,
  openCreateModal: PropTypes.func.isRequired,
  toggleToolsBar: PropTypes.func.isRequired,
  setFilter: PropTypes.func
};

export default ToolsBar;
