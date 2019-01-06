import React from 'react';
import ToolsBar from './ToolsBar';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import CreateContactModal from './CreateContactModal';
import ContactsList from './ContactsList';

const options = [
  { key: 'i', text: 'IT', value: 'IT' },
  { key: 'r', text: 'Human Resources', value: 'RRHH' }
];

class Contacts extends React.Component {
  state = {
    section: 'favorites',
    isSearching: false,
    isCreating: false
  }

  setSection = (e, { name }) => {
    this.setState({
      section: name
    });
  }

  toggleToolsBar = () => {
    this.setState({
      isSearching: !this.state.isSearching
    });
  }

  openCreateModal = () => this.setState({ isCreating: true });
  closeCreateModal = () => this.setState({ isCreating: false });

  render() {
    const { section, isSearching, isCreating } = this.state;
    return (
      <section>
        <CreateContactModal
          isOpen={isCreating} 
          closeCreateModal={this.closeCreateModal} 
        />
        <ToolsBar
          toggleToolsBar={this.toggleToolsBar} 
          openCreateModal={this.openCreateModal} 
        />
        <SearchBar isSearching={isSearching} options={options} />
        <Navigation
          onNavigate={this.setSection} 
          activeItem={section}
         />
         <ContactsList section={section} />
      </section>
    );
  }
}

export default Contacts;
