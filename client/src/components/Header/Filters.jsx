import React from 'react';
import { Form } from 'semantic-ui-react';

class Filters extends React.Component {
  render() {
    return (
      <Form>
        <Form.Input placeholder="Search" type="text" />
      </Form>
    );
  }
}

export default Filters;
