import React, { createContext } from 'react';
import ContactsAPI from 'api/ContactsAPI';
import { Map } from 'immutable';
import { normalize, schema } from 'normalizr';

const Context = createContext({ foo: 'bar' });

class ContactsContext extends React.Component {
  static Consumer = Context.Consumer;
  static Provider = Context.Provider;

  constructor(props, context) {
    super(props, context);

    this.state = {
      contacts: null
    }

    this.api = new ContactsAPI();
  }

  get = async () => {
    const contactsData = await this.api.get();
    const contactSchema = new schema.Entity('contact');
    const contacts = normalize(contactsData, [contactSchema]).entities.contact;
    this.setState({ contacts: new Map(contacts) });
  }

  create = async contact => {
    const newContact = await this.api.create(contact);
    const next = this.state.contacts.set(newContact.id, newContact);
    this.setState({ contacts: next });
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
