import React from 'react';
import './contacts.css';
import CreateContactModal from './CreateContactModal';
import DeleteContactModal from './DeleteContactModal';
import ContactsList from './ContactsList';
import PreviewContact from './PreviewContact';
import EditContactModal from 'components/Contacts/EditContactModal';
import { ContactsContext, AppContext } from 'contexts';

const Contacts = () => (
  <AppContext.Consumer>
    {({ state: { error } }) => (
      <ContactsContext.Consumer>
        {({ state }) => (
          <section
            className={
              state.isPreviewing
                ? error
                  ? 'contacts-main split-2 error-open'
                  : 'contacts-main split-2'
                : error
                ? 'contacts-main error-open'
                : 'contacts-main'
            }
          >
            <CreateContactModal />
            <DeleteContactModal />
            <EditContactModal />
            <ContactsList />
            {state.isPreviewing ? (
              <PreviewContact
                contact={state.contacts.get(state.isPreviewing)}
              />
            ) : null}
          </section>
        )}
      </ContactsContext.Consumer>
    )}
  </AppContext.Consumer>
);

export default Contacts;
