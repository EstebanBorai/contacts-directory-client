import React from 'react';
import ToolsBar from './ToolsBar';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import CreateContactModal from './CreateContactModal';
import ContactsList from './ContactsList';
import PreviewContact from 'components';

// TODO: Get labels from contacts 
const options = [
  { key: 'i', text: 'IT', value: 'IT' },
  { key: 'r', text: 'Human Resources', value: 'RRHH' }
];

class Contacts extends React.Component {
  state = {
    section: 'favorites',
    isSearching: false,
    isCreating: false,
    isPreviewing: null
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

  setPreviewContact = contact => this.setState({ isPreviewing: contact });

  render() {
    const { section, isSearching, isCreating, isPreviewing } = this.state;
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
         <PreviewContact contact={isPreviewing} />
      </section>
    );
  }
}

export default Contacts;
