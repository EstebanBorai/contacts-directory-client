import React from 'react';
import './header.css';
import { Icon } from 'semantic-ui-react';
import NavigationContext from 'contexts/NavigationContext';

const Menu = () => (
  <NavigationContext.Consumer>
    {({ state, actions }) => (
      <ul>
        <li onClick={actions.toggleFavorites}>
          <Icon name="star" color={state.showFavorites ? 'yellow' : 'grey'} />
        </li>
        <li onClick={actions.openAddingModal}>
          <Icon name="plus" />
        </li>
      </ul>
    )}
  </NavigationContext.Consumer>
);

export default Menu;
