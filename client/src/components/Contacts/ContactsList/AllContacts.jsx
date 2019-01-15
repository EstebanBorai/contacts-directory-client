import React from 'react';
import { List, Message } from 'semantic-ui-react';
import ContactListItem from './ContactListItem';
import { ContactsContext, NavigationContext } from 'contexts';
import FavoriteContacts from './FavoriteContacts';

class AllContacts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationContext.Consumer>
          {({ state }) => (state.showFavorites ? <FavoriteContacts /> : null)}
        </NavigationContext.Consumer>
        <List relaxed selection verticalAlign="middle">
          <ContactsContext.Consumer>
            {({ state }) =>
              state.contacts && state.contacts.size > 0 ? (
                state.contacts
                  .valueSeq()
                  .map((contact, index) => (
                    <ContactListItem contact={contact} key={index} />
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
