import React from 'react';
import './contacts.css';
import CreateContactModal from './CreateContactModal';
import ContactsList from './ContactsList';
import PreviewContact from './PreviewContact';

class Contacts extends React.Component {
  state = {
    isPreviewing: null
  }

  setPreviewContact = contact => this.setState({ isPreviewing: contact });

  render() {
    const { section, isPreviewing } = this.state;
    return (
      <section className="contacts-main">
        <CreateContactModal />
        { isPreviewing ?
          <PreviewContact contact={isPreviewing} /> :
          <React.Fragment>
            <ContactsList section={section} onSelect={this.setPreviewContact} />
          </React.Fragment>
        }
      </section>
    );
  }
}

export default Contacts;
