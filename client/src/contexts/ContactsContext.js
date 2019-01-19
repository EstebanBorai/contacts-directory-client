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
      contacts: null,
      isPreviewing: null
    }

    this.api = new ContactsAPI();
  }

  get = async () => {
    this.context.actions.setLoading(true);
    try {
      const contactsData = await this.api.get();
      const contactSchema = new schema.Entity('contact');
      const contacts = normalize(contactsData, [contactSchema]).entities.contact;
      this.setState({ contacts: new Map(contacts) });
      this.context.actions.setLoading(false);
    } catch(error) {
      this.context.actions.setError(await error);
      this.context.actions.setLoading(false);
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

  setPreview = contact => this.setState({ isPreviewing: contact });

  update = async (id, contact) => {
    try {
      const edited = await this.api.update(id, contact);
      const next = this.state.contacts.set(edited.id, edited);
      this.setState({ contacts: next });
    } catch (error) {
      this.context.actions.setError(await error);
    }
  }

  remove = async contact => {
    try {
      const deleted = await this.api.delete(contact);
      const next = this.state.contacts.remove(deleted.id);
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
        create: this.create,
        update: this.update,
        remove: this.remove,
        setPreview: this.setPreview,
        editSlot: this.editSlot
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
