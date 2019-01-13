import React, { createContext } from 'react';

const Context = createContext();

class AppContext extends React.Component {
  static Consumer = Context.Consumer;
  static Provider = Context.Provider;

  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: false,
      error: null
    }
  }
  
  setError = error => this.setState({ error });
  setLoading = loading => this.setState({ loading });
  
  render() {
    const { children } = this.props;
    const contextValue = {
      state: { ...this.state },
      actions: {
        setError: this.setError,
        setLoading: this.setLoading
      }
    }

    return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;
