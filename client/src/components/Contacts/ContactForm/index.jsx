import React from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';
import Slots from './Slots';
import AddAvatarModal from './AddAvatarModal';

class ContactForm extends React.Component {
  state = {
    isAddingField: false,
    isCustomField: false,
    isAddingAvatar: false,
    form: {
      firstName: '',
      lastName: '',
      department: '',
      slots: [],
      dates: []
    }
  };

  toggleAddingField = () => this.setState({ isAddingField: !this.state.isAddingField });

  openAddingAvatar = () => this.setState({ isAddingAvatar: true });
  closeAddingAvatar = () => this.setState({ isAddingAvatar: false });

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
    const { isAddingField, isAddingAvatar, form } = this.state;
    return (
      <React.Fragment>
      <AddAvatarModal isOpen={isAddingAvatar} onClose={this.closeAddingAvatar} />
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
        <Button onClick={this.openAddingAvatar}>Avatar</Button>
        <Divider />
        {
          isAddingField ?
          <Slots onSelect={this.addSlot} /> :
          null
        }
        <Button onClick={this.toggleAddingField}>
          { isAddingField ? 'Cancel Adding Field' : 'Add Field' }
        </Button>
      </Form>
      </React.Fragment>
    );
  }
}

export default ContactForm;
