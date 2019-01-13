import React from 'react';
import ContactsContext from 'contexts/ContactsContext';
import './contacts-list.css';
import AllContacts from './AllContacts';
import PropTypes from 'prop-types';

class ContactsList extends React.Component {
  static contextType = ContactsContext.Consumer;
  static propTypes = {
    isPreviewing: PropTypes.string,
    onSelect: PropTypes.func.isRequired
  }

  async componentDidMount() {
    this.context.actions.get();
  }

  render() {
    const { onSelect, isPreviewing } = this.props;
    return (
      <section id="contacts-list">
        <AllContacts onSelect={onSelect} isPreviewing={isPreviewing} />
      </section>
    );
  }
}

export default ContactsList;
