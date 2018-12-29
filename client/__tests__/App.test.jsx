import React from 'react';
import App from 'components/App';
import { shallow } from 'enzyme';
import Header from 'components/Header';
import Contacts from 'components/Contacts';

describe('App renderization', () => {
  it('should render Header', () => {
    const app = shallow(<App />);
    expect(app.find(Header).exists()).toBe(true);
  });
  
  it('should render Contacts', () => {
    const app = shallow(<App />);
    expect(app.find(Contacts).exists()).toBe(true);
  });
});
