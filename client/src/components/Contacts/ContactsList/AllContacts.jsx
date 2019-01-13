import React from 'react';
import PropTypes from 'prop-types';
import { List, Message } from 'semantic-ui-react';
import ContactListItem from './ContactListItem';
import ContactsContext from 'contexts/ContactsContext';
import FavoriteContacts from './FavoriteContacts';
import NavigationContext from 'contexts/NavigationContext';

class AllContacts extends React.Component {
  static propTypes = {
    isPreviewing: PropTypes.string,
    onSelect: PropTypes.func.isRequired
  }

  render() {
    const { onSelect, isPreviewing } = this.props;
    return (
      <React.Fragment>
        <NavigationContext.Consumer>
          {
            ({ state }) =>
              state.showFavorites ? 
              <FavoriteContacts onSelect={onSelect} /> : 
              null
          }
        </NavigationContext.Consumer>
      <List relaxed selection verticalAlign="middle">
        <ContactsContext.Consumer>
          {({ state }) =>
            state.contacts && state.contacts.size > 0 ? (
              state.contacts
                .valueSeq()
                .map((contact, index) => (
                  <ContactListItem
                    contact={contact}
                    key={index}
                    onSelect={onSelect}
                    isSelected={isPreviewing}
                  />
                ))
                .toArray()
            ) : (
              <Message>There&#39;s no contacts to show</Message>
            )
          }
        </ContactsContext.Consumer>
      </List>
      </React.Fragment>
    );
  }
}

export default AllContacts;
