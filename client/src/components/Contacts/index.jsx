import React from 'react';
import './contacts.css';
import CreateContactModal from './CreateContactModal';
import DeleteContactModal from './DeleteContactModal';
import ContactsList from './ContactsList';
import PreviewContact from './PreviewContact';

class Contacts extends React.Component {
  state = {
    isPreviewing: null
  }

  get className() {
    let className = 'contacts-main';
    if (this.state.isPreviewing) {
      className += ' split-2';
    }

    return className;
  }

  get previngContactId() {
    if (this.state.isPreviewing) {
      return this.state.isPreviewing.id;
    }
    return null;
  }

  setPreviewContact = contact => this.setState({ isPreviewing: contact });

  render() {
    const { section, isPreviewing } = this.state;
    return (
      <section className={this.className}>
        <CreateContactModal />
        <DeleteContactModal />
        <ContactsList section={section} onSelect={this.setPreviewContact} isPreviewing={this.previngContactId} />
        {
          isPreviewing ?
          <PreviewContact contact={isPreviewing} /> :
          null
        }
      </section>
    );
  }
}

export default Contacts;
