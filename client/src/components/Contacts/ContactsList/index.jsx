import React from 'react';
import ContactsContext from 'contexts/ContactsContext';

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
      <ul>
        <h1>All Contacts</h1>
        <ContactsContext.Consumer>
          {
            ctx => ctx.state.contacts && ctx.state.contacts.map((c, i) => (
              <li key={i}>
                {JSON.stringify(c)}
              </li>
            ))
          }
        </ContactsContext.Consumer>
      </ul>
    );
  }
}

export default ContactsList;
