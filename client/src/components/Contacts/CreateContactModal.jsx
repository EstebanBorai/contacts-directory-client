import React from 'react';
import { Modal } from 'semantic-ui-react';
import ContactForm from './ContactForm';
import NavigationContext from 'contexts/NavigationContext';

const CreateContactModal = () => (
  <NavigationContext.Consumer>
    {({ state, actions }) => (
      <Modal open={state.isAdding} onClose={actions.closeAddingModal}>
        <Modal.Header>Create Contact</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <ContactForm onClose={actions.closeAddingModal} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )}
  </NavigationContext.Consumer>
);

export default CreateContactModal;
