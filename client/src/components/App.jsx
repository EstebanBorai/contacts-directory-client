import React from 'react';
import Header from 'components/Header';
import Contacts from 'components/Contacts';
import ContactsContext from 'contexts/ContactsContext';
import NavigationContext from 'contexts/NavigationContext';

const App = () => (
  <NavigationContext>
    <ContactsContext>
      <React.Fragment>
        <Header />
        <Contacts />
      </React.Fragment>
    </ContactsContext>
  </NavigationContext>
);

export default App;
