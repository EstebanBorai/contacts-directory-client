import React from 'react';
import { Modal } from 'semantic-ui-react';
import NavigationContext from 'contexts/NavigationContext';

const EditFieldModal = () => (
  <NavigationContext.Consumer>
    {({ state, actions }) => (
      <Modal open={state.isEditing} onClose={actions.closeAddingModal}>
        <Modal.Header>Create Contact</Modal.Header>
        <Modal.Content>
          <Modal.Description>Test</Modal.Description>
        </Modal.Content>
      </Modal>
    )}
  </NavigationContext.Consumer>
);

export default EditFieldModal;
