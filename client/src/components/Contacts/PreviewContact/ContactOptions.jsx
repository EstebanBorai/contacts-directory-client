import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import NavigationContext from 'contexts/NavigationContext';

const ContactOptions = ({ contact }) => (
  <NavigationContext.Consumer>
    {({ actions: { openDeleteModal } }) => (
      <footer className="contact-preview-footer ">
        <Button onClick={openDeleteModal.bind(null, contact)} icon>
          <Icon name="trash alternate" color="red" />
        </Button>
      </footer>
    )}
  </NavigationContext.Consumer>
);

ContactOptions.propTypes = {
  contact: PropTypes.object
};

export default ContactOptions;
