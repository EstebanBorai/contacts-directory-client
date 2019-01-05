import React from 'react';
import Header from 'components/Header';
import Contacts from 'components/Contacts';
import ContactsContext from 'contexts/ContactsContext';

const App = () => (
  <ContactsContext>
    <React.Fragment>
      <Header />
      <Contacts />
    </React.Fragment>
  </ContactsContext>
);

export default App;
