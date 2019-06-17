import React from 'react';
import './header.css';
import { Icon } from 'semantic-ui-react';
import { NavigationContext, ContactsContext } from 'contexts';

const Menu = () => (
  <ContactsContext.Consumer>
    {({ state: { isFiltering } }) => (
      <NavigationContext.Consumer>
        {({ state, actions }) => (
          <ul>
            <li
              onClick={isFiltering ? null : actions.toggleFavorites}
              className={isFiltering ? 'disabled' : ''}
            >
              <Icon
                name="star"
                color={
                  isFiltering ? 'grey' : state.showFavorites ? 'yellow' : 'grey'
                }
              />
            </li>
            <li onClick={actions.openAddingModal}>
              <Icon name="plus" />
            </li>
          </ul>
        )}
      </NavigationContext.Consumer>
    )}
  </ContactsContext.Consumer>
);

export default Menu;
