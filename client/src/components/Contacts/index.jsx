import React from 'react';
import Search from './Search';
import Navigation from './Navigation';

class Contacts extends React.Component {
  state = {
    section: 'home',
    isHidden: true
  }

  setSection = (e, { name }) => {
    this.setState({
      section: name
    });
  }

  render() {
    const { section, isHidden } = this.state;
    return (
      <section>
        <Search hide={isHidden} />
        <Navigation 
          onNavigate={this.setSection} 
          activeItem={section}
         />
      </section>
    );
  }
}

export default Contacts;
