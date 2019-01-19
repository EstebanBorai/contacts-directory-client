import React from 'react';
import PropTypes from 'prop-types';
import './preview-contact.scss';
import { Icon } from 'semantic-ui-react';

const ContactData = ({ contact }) => (
  <div className="contact-data">
    {contact.avatar ? (
      <div className="contact-avatar">
        <img src={contact.avatar} />
      </div>
    ) : null}
    <h3 className="contact-fullname">
      {contact.firstName} {contact.lastName} &nbsp;
      {contact.favorite ? <Icon name="star" color="yellow" /> : null}
    </h3>
    <span className="contact-department">{contact.department}</span>
  </div>
);

ContactData.propTypes = {
  contact: PropTypes.object
};

export default ContactData;
