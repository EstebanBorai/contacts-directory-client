import React from 'react';
import ContactsContext from 'contexts/ContactsContext';
import { Message, Card } from 'semantic-ui-react';
import './contacts-list.css';
import ContactCard from './ContactCard';

class ContactsList extends React.Component {
  static contextType = ContactsContext.Consumer;

  constructor(props, context) {
    super(props, context);
  } 

  async componentDidMount() {
    this.context.actions.get();
  }

  render() {
    return (
      <section id="contacts-list">
        <h1>All Contacts</h1>
        <ContactsContext.Consumer>
          {
            ctx => ctx.state.contacts && ctx.state.contacts.length > 0 ? 
              <Card.Group centered>
              {
                ctx.state.contacts.map((contact, index) => (
                  <ContactCard key={index} contact={contact} />
                ))
              }
              </Card.Group> :
              <Message>
                There's no contacts to show
              </Message>
          }
        </ContactsContext.Consumer>
      </section>
    );
  }
}

export default ContactsList;
