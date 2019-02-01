import React from 'react';
import Contacts from 'components/Contacts';
import { shallow } from 'enzyme';

describe('Contacts renderization and usage', () => {
  let contacts;

  beforeEach(() => {
    contacts = shallow(<Contacts />);
  });

  it('should return a section element to wrap all elements', () => {
    expect(contacts.first().is('section')).toBe(true);
  });

  it('should change section', () => {
    contacts.instance().setSection(null, { name: 'test' });
    expect(contacts.state('section')).toEqual('test');
  });

  it('should toggle ToolsBar', () => {
    contacts.instance().toggleToolsBar();
    expect(contacts.state('isSearching')).toBe(true);
  });

  it('should open the contacts creation modal', () => {
    contacts.instance().openCreateModal();
    expect(contacts.state('isCreating')).toBe(true);
  });

  it('should close the contacts creation modal', () => {
    contacts.setState({ isCreating: true });
    contacts.instance().closeCreateModal();
    expect(contacts.state('isCreating')).toBe(false);
  });
});
