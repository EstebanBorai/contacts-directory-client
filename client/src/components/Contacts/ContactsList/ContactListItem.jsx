import React from 'react';
import PropTypes from 'prop-types';
import { List, Image, Icon } from 'semantic-ui-react';
import sampleImage from 'assets/sample-color.png';
import { ContactsContext } from 'contexts';
import './contacts-list.css';

const ContactListItem = ({ contact }) => (
  <ContactsContext.Consumer>
    {({ state, actions }) => (
      <List.Item
        onClick={actions.setPreview.bind(null, contact)}
        active={state.isPreviewing && state.isPreviewing.id === contact.id}
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
              <Icon
                name="star"
                color="yellow"
                style={{ marginLeft: '.5rem' }}
              />
            ) : null}
          </List.Header>
          <List.Description>{contact.department}</List.Description>
        </List.Content>
      </List.Item>
    )}
  </ContactsContext.Consumer>
);

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactListItem;
