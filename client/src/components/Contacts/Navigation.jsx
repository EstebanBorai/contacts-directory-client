import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const Navigation = ({ onNavigate, activeItem }) => {
  return (
    <Menu pointing secondary>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={onNavigate}
      />
      <Menu.Item
        name="favorites"
        active={activeItem === 'favorites'}
        onClick={onNavigate}
      />
    </Menu>
  );
};

Navigation.propTypes = {
  activeItem: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default Navigation;
