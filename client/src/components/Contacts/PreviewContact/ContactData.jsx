import React from 'react';
import PropTypes from 'prop-types';
import './preview-contact.css';
import Slot from './Slot';

const ContactData = ({ contact }) => (
  <div className="contact-data">
    <header>{contact.avatar ? <img src={contact.avatar} /> : null}</header>
    <h3>
      {contact.firstName} {contact.lastName}
    </h3>
    <span>{contact.department}</span>
    {contact.slots && contact.slots.length > 0
      ? contact.slots.map(slot => <Slot slot={slot} key={slot.id} />)
      : null}
  </div>
);

ContactData.propTypes = {
  contact: PropTypes.object
};

export default ContactData;
