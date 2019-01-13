import React, { createContext } from 'react';
import ContactsAPI from 'api/ContactsAPI';
import { Map } from 'immutable';
import { normalize, schema } from 'normalizr';
import AppContext from './AppContext';

const Context = createContext();

class ContactsContext extends React.Component {
  static Consumer = Context.Consumer;
  static Provider = Context.Provider;
  static contextType = AppContext.Consumer;

  constructor(props, context) {
    super(props, context);

    this.state = {
      contacts: null
    }

    this.api = new ContactsAPI();
  }

  get = async () => {
    try {
      const contactsData = await this.api.get();
      const contactSchema = new schema.Entity('contact');
      const contacts = normalize(contactsData, [contactSchema]).entities.contact;
      this.setState({ contacts: new Map(contacts) });
    } catch(error) {
      this.context.actions.setError(await error);
    }
  }

  create = async contact => {
    try {
      const newContact = await this.api.create(contact);
      const next = this.state.contacts.set(newContact.id, newContact);
      this.setState({ contacts: next });
    } catch (error) {
      this.context.actions.setError(await error);
    }
  }

  render() {
    const { children } = this.props;
    const contextValue = {
      state: { ...this.state },
      actions: {
        get: this.get,
        create: this.create
      }
    }

    return (
      <ContactsContext.Provider value={contextValue}>
        {children}
      </ContactsContext.Provider>
    );
  }
}

export default ContactsContext;
