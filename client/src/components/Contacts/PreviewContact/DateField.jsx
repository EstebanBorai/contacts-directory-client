import React from 'react';
import PropTypes from 'prop-types';
import { months } from 'components/Contacts/ContactForm/constants';

const DateField = ({ date }) => {
  const dateObj = new Date(date.dateValue);
  return (
    <li>
      {dateObj.getDate()} {months[dateObj.getMonth()].text}
      {dateObj.getFullYear()}
    </li>
  );
};

DateField.propTypes = {
  date: PropTypes.object.isRequired
};

export default DateField;
