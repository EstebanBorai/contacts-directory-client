import React from 'react';
import PropTypes from 'prop-types';
import { months } from 'components/Contacts/ContactForm/constants';

const DateField = ({ date }) => {
  const dateObj = new Date(date.dateValue);
  return (
    <li className="contact-date">
      <span className="preview-subtitle">{date.label}</span>
      <br />
      <span>{months[dateObj.getMonth()].text}</span>&nbsp;&#47;&nbsp;
      <span>{dateObj.getDate()}</span>&nbsp;&#47;&nbsp;
      <span>{dateObj.getFullYear()}</span>
    </li>
  );
};

DateField.propTypes = {
  date: PropTypes.object.isRequired
};

export default DateField;
