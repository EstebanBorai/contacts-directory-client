import React from 'react';
import { shallow } from 'enzyme';
import AddAvatarModal from 'components/Contacts/ContactForm/AddAvatarModal';
import { Modal } from 'semantic-ui-react';

describe('Contacts/ContactForm/AddAvatarModal renderization and usage', () => {
  it('should render a Modal component', () => {
    const addAvatarModal = shallow(<AddAvatarModal />);
    expect(addAvatarModal.find(Modal).exists()).toBe(true);
  });

  it('should not render a image with the avatar if no prop is given', () => {
    const addAvatarModal = shallow(<AddAvatarModal />);
    expect(addAvatarModal.find('img').exists()).toBe(false);
  });

  it('should render a image with the avatar if prop is given', () => {
    const props = { avatar: 'image-src-mock' };
    const addAvatarModal = shallow(<AddAvatarModal {...props} />);
    expect(addAvatarModal.find('img').exists()).toBe(true);
  });
});
