import React from 'react';
import { ContactsContext } from 'contexts';
import './contacts-list.css';
import AllContacts from './AllContacts';

class ContactsList extends React.Component {
  static contextType = ContactsContext.Consumer;
  async componentDidMount() {
    this.context.actions.get();
  }

  render() {
    return (
      <section id="contacts-list">
        <AllContacts />
      </section>
    );
  }
}

export default ContactsList;
