import React from 'react';
import CreateContactModal from 'components/Contacts/CreateContactModal';
import { shallow } from 'enzyme';

describe('Contacts/CreateContactModal renderization and usage', () => {
  it('should return a Modal component', () => {
    let createContactModal = shallow(<CreateContactModal />);
    expect(createContactModal.find('Modal').exists()).toBe(true);
  });  
});
