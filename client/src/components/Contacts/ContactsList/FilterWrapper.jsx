import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { List } from 'semantic-ui-react';

const FilterWrapper = ({ filterCondition, results }) => (
  <div>
    <h2>
      Search for:&nbsp;<em>{filterCondition}</em>&nbsp;
    </h2>
    <List relaxed selection verticalAlign="middle">
      {results &&
        results
          .valueSeq()
          .map((contact, index) => (
            <ContactListItem contact={contact} key={index} />
          ))
          .toArray()}
    </List>
  </div>
);

FilterWrapper.propTypes = {
  filterCondition: PropTypes.string,
  results: PropTypes.object
};

export default FilterWrapper;
