import React from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';
import NavigationContext from 'contexts/NavigationContext';
import ContactsContext from 'contexts/ContactsContext';

const DeleteContactModal = () => (
  <NavigationContext.Consumer>
    {({ state, actions }) =>
      state.isDeleting ? (
        <Modal open={state.isDeleting} onClose={actions.closeDeleteModal}>
          <Modal.Header>Delete Contact</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              You are about to delete{' '}
              <em>
                {state.isDeleting.firstName} {state.isDeleting.lastName}&#39;s
              </em>{' '}
              contact permanently. Are you sure about this operation?
            </Modal.Description>
          </Modal.Content>
          <ContactsContext.Consumer>
            {({ actions: { remove } }) => (
              <Modal.Actions>
                <Button
                  color="red"
                  onClick={remove.bind(null, state.isDeleting)}
                >
                  <Icon name="trash alternate" /> Yes
                </Button>
                <Button secondary onClick={actions.closeDeleteModal}>
                  No
                </Button>
              </Modal.Actions>
            )}
          </ContactsContext.Consumer>
        </Modal>
      ) : null
    }
  </NavigationContext.Consumer>
);

export default DeleteContactModal;
