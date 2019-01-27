import React from 'react';
import PropTypes from 'prop-types';
import './preview-contact.scss';
import Slot from './Slot';
import DateField from './DateField';

const ContactFields = ({ slots, dates }) => (
  <section className="contact-fields">
    {slots.length > 0 ? <h4>Phones</h4> : null}
    <ul className="contact-field-list">
      {slots &&
        slots.map((slot, index) => (
          <Slot key={index} slot={slot} slotIndex={index} />
        ))}
    </ul>
    {dates.length > 0 ? <h4>Dates</h4> : null}
    <ul className="contact-fields">
      {dates &&
        dates.map((date, index) => <DateField key={index} date={date} />)}
    </ul>
  </section>
);

ContactFields.propTypes = {
  slots: PropTypes.array,
  dates: PropTypes.array
};

export default ContactFields;
