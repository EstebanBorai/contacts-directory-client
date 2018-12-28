import React from 'react';
import PropTypes from 'prop-types';
import './contact-form.css';
import { Modal, Message, Button } from 'semantic-ui-react';

const AddAvatarModal = ({
  isOpen,
  onClose,
  handleFileLoad,
  onDiscard,
  avatar
}) => (
  <Modal open={isOpen} onClose={onDiscard}>
    <Modal.Header>Choose Avatar</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <div className="avatar-modal-container">
          {avatar ? (
            <React.Fragment>
              <img src={avatar} alt="avatar" />
              <br />
            </React.Fragment>
          ) : (
            <Message>
              <Message.Header>Select an Image</Message.Header>
              <p>Select an image to use as avatar image for this contact.</p>
            </Message>
          )}
          <input
            className="ui icon button"
            type="file"
            accept=".jpg, .png"
            onChange={handleFileLoad}
          />
        </div>
        <div>
          <Button primary onClick={onClose}>
            Save Changes
          </Button>
          <Button secondary onClick={onDiscard}>
            Cancel
          </Button>
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

AddAvatarModal.propTypes = {
  avatar: PropTypes.any,
  isOpen: PropTypes.bool,
  onDiscard: PropTypes.func,
  closeCreateModal: PropTypes.func,
  handleFileLoad: PropTypes.func
};

export default AddAvatarModal;
