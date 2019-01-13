import React from 'react';
import PropTypes from 'prop-types';
import './preview-contact.css';
import { Icon } from 'semantic-ui-react';
import { slotTypes } from 'components/Contacts/ContactForm/constants';

const Slot = ({ slot }) => (
  <li className="contact-slot">
    <em>{slotTypes[slot.type].text}</em>
    <div>
      <Icon name="phone" color="grey" />
      <span>{slot.value}</span>
    </div>
  </li>
);

Slot.propTypes = {
  slot: PropTypes.object.isRequired
};

export default Slot;
