import React from 'react';
import PropTypes from 'prop-types';

const PreviewContact = ({ contact }) => (
  <section>{JSON.stringify(contact)}</section>
);

PreviewContact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default PreviewContact;
