import React from 'react';
import { Message, Card } from 'semantic-ui-react';
import ContactsContext from 'contexts/ContactsContext';
import ContactCard from './ContactCard';

class FavoriteContacts extends React.Component {
  render() {
    return (
      <Card.Group centered>
        <ContactsContext.Consumer>
          {ctx =>
            ctx.state.contacts &&
            ctx.state.contacts.length > 0 &&
            ctx.state.contacts.some(c => c.favorite) ? (
              ctx.state.contacts.map((contact, index) => {
                if (contact.favorite) {
                  return <ContactCard contact={contact} key={index} />;
                }
              })
            ) : (
              <Message>There&#39;s no contacts to show</Message>
            )
          }
        </ContactsContext.Consumer>
      </Card.Group>
    );
  }
}

export default FavoriteContacts;
