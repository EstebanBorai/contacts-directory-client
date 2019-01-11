import React, { createContext } from 'react';

const Context = createContext();

class NavigationContext extends React.Component {
  static Consumer = Context.Consumer;
  static Provider = Context.Provider;

  constructor(props, context) {
    super(props, context);

    this.state = {
      showFavorites: false,
      isAdding: false,
      isPreviewing: false
    }
  }

  toggleFavorites = () => this.setState({ showFavorites: !this.state.showFavorites });
  
  openAddingModal = () => this.setState({ isAdding: true });
  closeAddingModal = () => this.setState({ isAdding: false });

  render() {
    const { children } = this.props;
    const contextValue = {
      state: { ...this.state },
      actions: {
        toggleFavorites: this.toggleFavorites,
        openAddingModal: this.openAddingModal,
        closeAddingModal: this.closeAddingModal
      }
    }

    return (
      <NavigationContext.Provider value={contextValue}>
        {children}
      </NavigationContext.Provider>
    );
  }
}

export default NavigationContext;
