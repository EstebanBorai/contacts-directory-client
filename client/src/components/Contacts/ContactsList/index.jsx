import React from 'react';
import ContactsContext from 'contexts/ContactsContext';
import './contacts-list.css';
import AllContacts from './AllContacts';
import FavoriteContacts from './FavoriteContacts';

class ContactsList extends React.Component {
  static contextType = ContactsContext.Consumer;

  async componentDidMount() {
    this.context.actions.get();
  }

  render() {
    const { section } = this.props;
    return (
      <section id="contacts-list">
        {
          section === 'favorites' ?
          <FavoriteContacts /> :
          null
        }
        {
          section === 'all' ?
          <AllContacts /> :
          null
        }
      </section>
    );
  }
}

export default ContactsList;
