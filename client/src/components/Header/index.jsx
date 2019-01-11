import React from 'react';
import './header.css';
import Menu from './Menu';
import Filters from './Filters';
import NavigationContext from 'contexts/NavigationContext';

class Header extends React.Component {
  static contextType = NavigationContext.Consumer;
  render() {
    return (
      <header id="app-header">
        <Menu onNavigate={this.context.actions.setNavigation} />
        <Filters />
      </header>
    );
  }
}

export default Header;
