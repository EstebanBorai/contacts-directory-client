import React from 'react';
import { Message, Card } from 'semantic-ui-react';
import { ContactsContext } from 'contexts';
import ContactCard from './ContactCard';

const FavoriteContacts = () => (
  <Card.Group centered>
    <ContactsContext.Consumer>
      {({ state }) =>
        state.contacts &&
        state.contacts.size > 0 &&
        state.contacts.some(c => c.favorite) ? (
          state.contacts
            .valueSeq()
            .map((contact, index) => {
              if (contact.favorite) {
                return <ContactCard contact={contact} key={index} />;
              }
            })
            .toArray()
        ) : (
          <Message>There&#39;s no contacts to show</Message>
        )
      }
    </ContactsContext.Consumer>
  </Card.Group>
);

export default FavoriteContacts;
