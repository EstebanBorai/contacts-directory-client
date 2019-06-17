import React from 'react';
import { Form } from 'semantic-ui-react';
import { ContactsContext } from 'contexts';

class Filters extends React.Component {
  static contextType = ContactsContext.Consumer;

  constructor(props) {
    super(props);

    this.state = {
      filter: ''
    }
  }

  handleFilterChange = (e, { value }) => {
    this.setState({ filter: value });
    this.context.actions.filterContacts(value);
  }

  render() {
    return (
      <Form>
        <Form.Input 
          placeholder="Search" 
          type="text" 
          name="filter" 
          onChange={this.handleFilterChange} 
          value={this.state.filter}
          icon="search"
        />
      </Form>
    );
  }
}

export default Filters;
