import React from 'react';
import { Modal } from 'semantic-ui-react';
import ContactForm from './ContactForm';
import { NavigationContext } from 'contexts';

const EditContactModal = () => (
  <NavigationContext.Consumer>
    {({ state: { isEditing }, actions: { closeEditingModal } }) => (
      <Modal open={Boolean(isEditing)} onClose={closeEditingModal}>
        <Modal.Header>
          {isEditing && (
            <span>
              Edit {isEditing.firstName} {isEditing.lastName}
            </span>
          )}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <ContactForm
              onClose={closeEditingModal}
              initialValues={isEditing}
            />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )}
  </NavigationContext.Consumer>
);

export default EditContactModal;
