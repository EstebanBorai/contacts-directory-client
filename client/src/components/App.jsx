import React from 'react';
import Header from 'components/Header';
import Contacts from 'components/Contacts';
import { ContactsContext, NavigationContext, AppContext } from 'contexts';
import Loading from 'components/lib/Loading';

const App = () => (
  <AppContext>
    <NavigationContext>
      <ContactsContext>
        <React.Fragment>
          <Loading />
          <Header />
          <Contacts />
        </React.Fragment>
      </ContactsContext>
    </NavigationContext>
  </AppContext>
);

export default App;
