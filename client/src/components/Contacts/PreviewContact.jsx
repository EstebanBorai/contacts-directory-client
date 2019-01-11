import React from 'react';
import PropTypes from 'prop-types';

const PreviewContact = ({ contact }) => (
  <section className="preview-contact">
    {contact.avatar ? <img src={contact.avatar} /> : null}
    <h3>
      {contact.firstName} {contact.lastName}
    </h3>
    <span>{contact.department}</span>
  </section>
);

PreviewContact.propTypes = {
  contact: PropTypes.object
};

export default PreviewContact;
