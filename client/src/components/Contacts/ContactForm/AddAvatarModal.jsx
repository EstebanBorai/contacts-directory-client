import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

const AddAvatarModal = ({ isOpen, closeCreateModal }) => (
  <Modal open={isOpen} onClose={closeCreateModal}>
    <Modal.Header>Choose Avatar</Modal.Header>
    <Modal.Content>
      <Modal.Description>Any</Modal.Description>
    </Modal.Content>
  </Modal>
);

AddAvatarModal.propTypes = {
  isOpen: PropTypes.bool,
  closeCreateModal: PropTypes.func
};

export default AddAvatarModal;
