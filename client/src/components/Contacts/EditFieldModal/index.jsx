import React from 'react';
import { Modal } from 'semantic-ui-react';
import NavigationContext from 'contexts/NavigationContext';
import EditSlotField from './EditSlotField';
import { editTypes } from './constants';

function getEditingField(fieldValues, type) {
  switch (type) {
    case editTypes.slot:
      return <EditSlotField fieldValues={fieldValues} />;
    default:
      return null;
  }
}

const EditFieldModal = () => (
  <NavigationContext.Consumer>
    {({ state, actions }) => (
      <Modal
        open={Boolean(state.isEditing)}
        onClose={actions.closeEditingModal}
      >
        <Modal.Header>Modal Editing</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {getEditingField(state.isEditing, state.editType)}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )}
  </NavigationContext.Consumer>
);

export default EditFieldModal;
