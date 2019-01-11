import React from 'react';
import PropTypes from 'prop-types';
import { List, Message } from 'semantic-ui-react';
import ContactListItem from './ContactListItem';
import ContactsContext from 'contexts/ContactsContext';

class AllContacts extends React.Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired
  }

  render() {
    const { onSelect } = this.props;
    return (
      <List relaxed selection verticalAlign="middle">
        <ContactsContext.Consumer>
          {ctx =>
            ctx.state.contacts && ctx.state.contacts.size > 0 ? (
              ctx.state.contacts
                .valueSeq()
                .map((contact, index) => (
                  <ContactListItem
                    contact={contact}
                    key={index}
                    onSelect={onSelect}
                  />
                ))
                .toArray()
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
