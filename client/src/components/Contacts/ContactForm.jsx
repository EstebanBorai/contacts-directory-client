import React from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';
import Slots from './Slots';

class ContactForm extends React.Component {
  state = {
    isAddingField: false,
    isCustomField: false,
    form: {
      firstName: '',
      lastName: '',
      department: '',
      slots: [],
      dates: []
    }
  };

  toggleAddingField = () => this.setState({ isAddingField: !this.state.isAddingField });

  handleChange = (e, { name, value }) => {
    this.setState({
      form: { ...this.state.form, [name]: value  }
    });
  };

  addSlot = ({ type, customName, value }) => {
    const next = { 
      ...this.state, form: { 
        ...this.state.form, slots: [ 
          ...this.state.form.slots, { 
            type, customName, value 
          } 
        ] 
      } 
    };

    this.setState(next);
  }

  render() {
    const { isAddingField, isCustomField, form } = this.state;
    return (
      <Form>
        <Form.Input 
          name="firstName"
          label="First Name" 
          type="text" 
          onChange={this.handleChange}
          value={form.firstName}
        />
        <Form.Input 
          name="lastName"
          label="Last Name" 
          type="text" 
          onChange={this.handleChange} 
          value={form.lastName}
        />
        <Form.Input
          name="department"
          label="Department" 
          type="text" 
          onChange={this.handleChange}
          value={form.department}
        />
        <Button>Avatar</Button>
        <Divider />
        {
          isAddingField ?
          <Slots onSelect={this.addSlot} /> :
          null
        }
        <Button onClick={this.toggleAddingField}>
          { isAddingField ? 'Cancel Adding Field' : 'Add Field' }
        </Button>
        <Button>Add Date</Button>
      </Form>
    );
  }
}

export default ContactForm;
