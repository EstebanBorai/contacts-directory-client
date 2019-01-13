import React from 'react';
import PropTypes from 'prop-types';
import './preview-contact.css';
import ContactData from './ContactData';

const PreviewContact = ({ contact }) => (
  <section className="preview-contact">
    <ContactData contact={contact} />
  </section>
);

PreviewContact.propTypes = {
  contact: PropTypes.object
};

export default PreviewContact;
