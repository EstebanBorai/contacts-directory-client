import React from 'react';
import PropTypes from 'prop-types';
import './preview-contact.css';
import ContactData from './ContactData';
import ContactFields from './ContactFields';
import ContactOptions from './ContactOptions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'components/lib/animate.css';

const PreviewContact = ({ contact }) => (
  <ReactCSSTransitionGroup
    transitionName="slideInRight"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}
  >
    <section className="preview-contact">
      <ContactData contact={contact} />
      <ContactFields slots={contact.slots} dates={contact.dates} />
      <ContactOptions contact={contact} />
    </section>
  </ReactCSSTransitionGroup>
);

PreviewContact.propTypes = {
  contact: PropTypes.object
};

export default PreviewContact;
