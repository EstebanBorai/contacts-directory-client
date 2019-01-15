import React from 'react';
import './header.css';
import Menu from './Menu';
import Filters from './Filters';
import { NavigationContext } from 'contexts';
import Notification from './Notification';

class Header extends React.Component {
  static contextType = NavigationContext.Consumer;
  render() {
    return (
      <React.Fragment>
        <header id="app-header">
          <Menu onNavigate={this.context.actions.setNavigation} />
          <Filters />
        </header>
        <Notification />
      </React.Fragment>
    );
  }
}

export default Header;
