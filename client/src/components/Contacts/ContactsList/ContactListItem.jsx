import React from 'react';
import PropTypes from 'prop-types';
import { List, Image, Icon } from 'semantic-ui-react';
import sampleImage from 'assets/sample-color.png';

const ContactListItem = ({ contact, onSelect, isSelected }) => (
  <List.Item
    onClick={onSelect.bind(null, contact)}
    active={isSelected === contact.id}
  >
    {contact.avatar !== null ? (
      <Image avatar src={contact.avatar} />
    ) : (
      <Image avatar src={sampleImage} />
    )}
    <List.Content>
      <List.Header as="a">
        {contact.firstName}&nbsp;{contact.lastName}
        {contact.favorite ? (
          <Icon name="star" color="yellow" style={{ marginLeft: '.5rem' }} />
        ) : null}
      </List.Header>
      <List.Description>{contact.department}</List.Description>
    </List.Content>
  </List.Item>
);

ContactListItem.propTypes = {
  isSelected: PropTypes.string,
  contact: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default ContactListItem;
