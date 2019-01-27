import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { slotTypes } from 'components/Contacts/ContactForm/constants';
import './preview-contact.scss';

const Slot = ({ slot }) => (
  <li className="contact-slot">
    {slot.type === 9 ? (
      <span className="preview-subtitle">{slot.customSlotType}</span>
    ) : (
      <span className="preview-subtitle">{slotTypes[slot.type].text}</span>
    )}
    <p>
      <span>{slot.value}</span>
    </p>
  </li>
);

Slot.propTypes = {
  slot: PropTypes.object
};

export default Slot;
