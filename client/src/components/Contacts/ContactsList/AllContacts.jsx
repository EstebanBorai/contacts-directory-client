import React from 'react';
import { List, Message } from 'semantic-ui-react';
import ContactListItem from './ContactListItem';
import ContactsContext from 'contexts/ContactsContext';

class AllContacts extends React.Component {
  render() {
    return (
      <List relaxed selection verticalAlign="middle">
        <ContactsContext.Consumer>
          {ctx =>
            ctx.state.contacts && ctx.state.contacts.length > 0 ? (
              ctx.state.contacts.map((contact, index) => (
                <ContactListItem contact={contact} key={index} />
              ))
            ) : (
              <Message>There&#39;s no contacts to show</Message>
            )
          }
        </ContactsContext.Consumer>
      </List>
    );
  }
}

export default AllContacts;
