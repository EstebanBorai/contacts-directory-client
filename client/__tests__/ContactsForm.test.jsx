import React from 'react';
import { shallow } from 'enzyme';
import ContactsForm from 'components/Contacts/ContactForm';
import FileReaderMock from './__mocks__/FileReader.mock';

describe('ContactsForm renderization and usage', () => {
  let contactsForm;
  window.FileReader = FileReaderMock;

  beforeEach(() => {
    contactsForm = shallow(<ContactsForm />);
  });

  it('updates state when opening avatar modal', () => {
    contactsForm.instance().openAddingAvatar();
    expect(contactsForm.state().isAddingAvatar).toBe(true);
  });

  it('updates state when closing avatar modal', () => {
    contactsForm.instance().closeAddingAvatar();
    expect(contactsForm.state().isAddingAvatar).toBe(false);
  });

  it('appends a slot', () => {
    const testSlot = { type: 9, customName: 'test slot', value: 'test value' };
    contactsForm.instance().addSlot(testSlot);
    expect(contactsForm.state().form.slots[0]).toEqual(testSlot);
  });

  it('not renders Slots component by default', () => {
    expect(contactsForm.find('Slots').exists()).toBe(false);
  });

  it('toggles the Slots component', () => {
    contactsForm.instance().toggleAddingField();
    expect(contactsForm.find('Slots').exists()).toBe(true);
  });

  it('adds an avatar image', () => {
    contactsForm.instance().handleFileLoad({ 
      target: {
        files: [
          { foo: 'bar' }
        ] 
      }
    });
    expect(contactsForm.state().form.avatar).toEqual('FILE_READED');
  });

  it('discards avatar update', () => {
    contactsForm.setState({ form: { avatar: 'SOMEHTING' } });
    contactsForm.instance().discardAvatarUpdate();
    expect(contactsForm.state().form.avatar).toBe(null);
  })

  it('should update fields in state', () => {
    const input = contactsForm.find('[name="firstName"]');
    input.simulate('change', null, { name: 'firstName', value: 'test first name' });
    expect(contactsForm.state().form.firstName).toBe('test first name');
  });
});
