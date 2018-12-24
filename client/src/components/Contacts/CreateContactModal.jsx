import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import ContactForm from './ContactForm';

const CreateContactModal = ({ isOpen, closeCreateModal }) => (
  <Modal open={isOpen} onClose={closeCreateModal}>
    <Modal.Header>Create Contact</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <ContactForm />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

CreateContactModal.propTypes = {
  isOpen: PropTypes.bool,
  closeCreateModal: PropTypes.func
};

export default CreateContactModal;
