import React from 'react';
import ContactsContext from 'contexts/ContactsContext';
import './contacts-list.css';
import AllContacts from './AllContacts';
import FavoriteContacts from './FavoriteContacts';
import PropTypes from 'prop-types';

class ContactsList extends React.Component {
  static contextType = ContactsContext.Consumer;
  static propTypes = {
    section: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  async componentDidMount() {
    this.context.actions.get();
  }

  render() {
    const { section, onSelect } = this.props;
    return (
      <section id="contacts-list">
        {
          section === 'favorites' ?
          <FavoriteContacts onSelect={onSelect} /> :
          null
        }
        {
          section === 'all' ?
          <AllContacts onSelect={onSelect} /> :
          null
        }
      </section>
    );
  }
}

export default ContactsList;
