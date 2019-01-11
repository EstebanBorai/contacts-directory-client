import React from 'react';
import PropTypes from 'prop-types';
import { Message, Card } from 'semantic-ui-react';
import ContactsContext from 'contexts/ContactsContext';
import ContactCard from './ContactCard';

class FavoriteContacts extends React.Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired
  }

  render() {
    const { onSelect } = this.props;
    return (
      <Card.Group centered>
        <ContactsContext.Consumer>
          {ctx =>
            ctx.state.contacts &&
            ctx.state.contacts.size > 0 &&
            ctx.state.contacts.some(c => c.favorite) ? (
              ctx.state.contacts
                .valueSeq()
                .map((contact, index) => {
                  if (contact.favorite) {
                    return (
                      <ContactCard
                        contact={contact}
                        key={index}
                        onSelect={onSelect}
                      />
                    );
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
  }
}

export default FavoriteContacts;
