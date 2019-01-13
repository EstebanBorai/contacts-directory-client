import React from 'react';
import Header from 'components/Header';
import Contacts from 'components/Contacts';
import ContactsContext from 'contexts/ContactsContext';
import NavigationContext from 'contexts/NavigationContext';
import AppContext from 'contexts/AppContext';

const App = () => (
  <AppContext>
    <NavigationContext>
      <ContactsContext>
        <React.Fragment>
          <Header />
          <Contacts />
        </React.Fragment>
      </ContactsContext>
    </NavigationContext>
  </AppContext>
);

export default App;
