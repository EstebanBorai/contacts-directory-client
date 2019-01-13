import React from 'react';
import ContactsContext from 'contexts/ContactsContext';
import NavigationContext from 'contexts/NavigationContext';
import './contacts-list.css';
import AllContacts from './AllContacts';
import FavoriteContacts from './FavoriteContacts';
import PropTypes from 'prop-types';

class ContactsList extends React.Component {
  static contextType = ContactsContext.Consumer;
  static propTypes = {
    onSelect: PropTypes.func.isRequired
  }

  async componentDidMount() {
    this.context.actions.get();
  }

  render() {
    const { onSelect } = this.props;
    return (
      <section id="contacts-list">
        <NavigationContext.Consumer>
          {
            ({ state }) => {
              if (!state.error) {
                return (
                  state.showFavorites ? 
                  <FavoriteContacts onSelect={onSelect} /> : 
                  <AllContacts onSelect={onSelect} />
                )
              } else {
                return (<h1>{JSON.stringify(state.error)}</h1>)
              }
            }
          }
        </NavigationContext.Consumer>
      </section>
    );
  }
}

export default ContactsList;
