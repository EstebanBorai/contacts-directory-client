import React from 'react';
import PropTypes from 'prop-types';
import './preview-contact.css';
import ContactData from './ContactData';
import ContactFields from './ContactFields';
import ContactOptions from './ContactOptions';

const PreviewContact = ({ contact }) => (
  <section className="preview-contact">
    <ContactData contact={contact} />
    <ContactFields slots={contact.slots} dates={contact.dates} />
    <ContactOptions contact={contact} />
  </section>
);

PreviewContact.propTypes = {
  contact: PropTypes.object
};

export default PreviewContact;
