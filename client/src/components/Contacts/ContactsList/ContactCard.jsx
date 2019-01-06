import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';

const ContactCard = ({ contact }) => (
  <Card>
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
);

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactCard;
