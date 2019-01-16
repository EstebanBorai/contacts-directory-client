import React from 'react';
import PropTypes from 'prop-types';
import './preview-contact.css';
import { Icon, Button } from 'semantic-ui-react';
import { slotTypes } from 'components/Contacts/ContactForm/constants';
import { NavigationContext } from 'contexts';
import { editTypes } from 'components/Contacts/EditFieldModal/constants';

const Slot = ({ slot }) => (
  <li className="contact-slot">
    <div className="main-data">
      <em>{slotTypes[slot.type].text}</em>
      <div className="contact-slot-field">
        <Icon name="phone" color="grey" />
        <span>{slot.value}</span>
      </div>
    </div>
    <NavigationContext.Consumer>
      {({ actions }) => (
        <Button
          icon
          onClick={actions.openEditingModal.bind(null, slot, editTypes.slot)}
        >
          <Icon name="edit" />
        </Button>
      )}
    </NavigationContext.Consumer>
  </li>
);

Slot.propTypes = {
  slot: PropTypes.object.isRequired
};

export default Slot;
