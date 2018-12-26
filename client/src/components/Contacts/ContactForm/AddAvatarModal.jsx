import React from 'react';
import PropTypes from 'prop-types';
import './contact-form.css';
import { Modal } from 'semantic-ui-react';

const AddAvatarModal = ({
  isOpen,
  closeCreateModal,
  handleFileLoad,
  avatar
}) => (
  <Modal open={isOpen} onClose={closeCreateModal} className="add-avatar-modal">
    <Modal.Header>Choose Avatar</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <img src={avatar} alt="avatar" />
        <input type="file" onChange={handleFileLoad} />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

AddAvatarModal.propTypes = {
  avatar: PropTypes.any,
  isOpen: PropTypes.bool,
  closeCreateModal: PropTypes.func,
  handleFileLoad: PropTypes.func
};

export default AddAvatarModal;
