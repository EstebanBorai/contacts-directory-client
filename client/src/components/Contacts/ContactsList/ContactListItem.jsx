import React from 'react';
import PropTypes from 'prop-types';
import { List, Image } from 'semantic-ui-react';
import sampleImage from 'assets/sample-color.png';

const ContactListItem = ({ contact }) => (
  <List.Item>
    {contact.avatar !== null ? (
      <Image avatar src={contact.avatar} />
    ) : (
      <Image avatar src={sampleImage} />
    )}
    <List.Content>
      <List.Header as="a">
        {contact.firstName}&nbsp;{contact.lastName}
      </List.Header>
      <List.Description>{contact.department}</List.Description>
    </List.Content>
  </List.Item>
);

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactListItem;
