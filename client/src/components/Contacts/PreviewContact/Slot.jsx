import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { slotTypes } from 'components/Contacts/ContactForm/constants';
import './preview-contact.scss';

const Slot = ({ slot }) => (
  <li className="contact-slot">
    {slot.type === 9 ? (
      <em>{slot.customSlotType}</em>
    ) : (
      <em>{slotTypes[slot.type].text}</em>
    )}
    <p>
      <span className="icon-container">
        <Icon name="phone" />
      </span>
      <span>{slot.value}</span>
    </p>
  </li>
);

Slot.propTypes = {
  slot: PropTypes.object
};

export default Slot;
