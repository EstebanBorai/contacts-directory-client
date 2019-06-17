import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

const ContactOptions = ({ isFavorite, handleFavorite }) => (
  <div id="contact-options">
    <Checkbox
      toggle
      label="Favorite"
      checked={isFavorite}
      onChange={handleFavorite}
    />
  </div>
);

ContactOptions.propTypes = {
  isFavorite: PropTypes.bool,
  handleFavorite: PropTypes.func.isRequired
};

export default ContactOptions;
