import React, { createContext } from 'react';
import ContactsAPI from 'api/ContactsAPI';

const Context = createContext({ foo: 'bar' });

class ContactsContext extends React.Component {
  static Consumer = Context.Consumer;
  static Provider = Context.Provider;

  constructor(props) {
    super(props);

    this.state = {
      contacts: null
    }

    this.api = new ContactsAPI();
  }

  get = async () => {
    const contacts = await this.api.get();
    this.setState({ contacts });
  }

  create = async contact => {
    const newContact = await this.api.create(contact);
    const next = [ ...this.state.contacts, newContact ];
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
