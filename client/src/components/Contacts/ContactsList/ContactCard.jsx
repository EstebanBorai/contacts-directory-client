import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { ContactsContext } from 'contexts';

const ContactCard = ({ contact }) => (
  <ContactsContext.Consumer>
    {({ actions }) => (
      <Card onClick={actions.setPreview.bind(null, contact)}>
        <Image src={contact.avatar} />
        <Card.Content>
          <Card.Header>
            {contact.firstName}&nbsp;{contact.lastName}
          </Card.Header>
          <Card.Meta>
            <span className="date">{contact.department}</span>
          </Card.Meta>
          <Card.Description>
            {/*TODO: Should show the first slot */}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="phone" />
            {/*TODO: Calls the first slot */}
            Call Work
          </a>
        </Card.Content>
      </Card>
    )}
  </ContactsContext.Consumer>
);

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default ContactCard;
