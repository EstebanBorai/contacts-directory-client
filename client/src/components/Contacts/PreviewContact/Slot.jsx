import React from 'react';
import PropTypes from 'prop-types';

const Slot = ({ slot }) => (
  <li>
    {slot.slotType}
    {slot.value}
    {slot.customSlotType ? slot.customSlotType : null}
  </li>
);

Slot.propTypes = {
  slot: PropTypes.object
};

export default Slot;
