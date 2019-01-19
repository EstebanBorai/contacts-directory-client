import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import { NavigationContext } from 'contexts';

const ContactOptions = ({ contact }) => (
  <NavigationContext.Consumer>
    {({ actions: { openDeleteModal, openEditingModal } }) => (
      <footer className="contact-preview-footer ">
        <Button onClick={openEditingModal.bind(null, contact)} icon>
          <Icon name="edit" color="black" />
        </Button>
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
