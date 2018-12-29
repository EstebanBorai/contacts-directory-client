import React from 'react';
import Navigation from 'components/Contacts/Navigation';
import { shallow } from 'enzyme';

describe('Contacts/Navigation renderization and usage', () => {
  it('should return a Menu component', () => {
    let navigation = shallow(<Navigation />);
    expect(navigation.find('Menu').exists()).toBe(true);
  });  
});
