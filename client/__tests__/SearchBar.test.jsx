import React from 'react';
import SearchBar from 'components/Contacts/SearchBar';
import { shallow } from 'enzyme';

describe('Contacts/SearchBar renderization and usage', () => {
  it('should not render if isSearching is falsy', () => {
    let searchBar = shallow(<SearchBar />);
    expect(searchBar.find('.search-bar').exists()).toBe(false);
  });

  it('should render if isSearching is truthy', () => {
    let props = { isSearching: true };
    let searchBar = shallow(<SearchBar {...props} />);
    expect(searchBar.find('.search-bar').exists()).toBe(true);
  });
});
