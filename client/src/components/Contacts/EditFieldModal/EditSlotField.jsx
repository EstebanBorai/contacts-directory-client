import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import { slotTypes } from 'components/Contacts/ContactForm/constants';

const EditSlotField = ({ fieldValues }) => (
  <div>
    <h4
      style={{
        paddingBottom: '1rem',
        boxSizing: 'border-box',
        display: 'block',
        margin: 0
      }}
    >
      {slotTypes[fieldValues.type].text}
    </h4>
    <Input placeholder={fieldValues.value} value={fieldValues.value} />
  </div>
);

EditSlotField.propTypes = {
  fieldValues: PropTypes.object
};

export default EditSlotField;
