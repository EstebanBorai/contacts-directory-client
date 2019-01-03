import React from 'react';
import './contact-form.css';
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
      dates: [],
      avatar: null
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

  /**
   * Appends a `slot` object to the collection of slots.
   * 
   * @param {Object} slot - Slot properties.
   * @param {number} slot.type - The slot type.
   * @param {string} slot.customName - Slot name.
   * @param {string} slot.value - Slot value.
   */
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
  
  handleFileLoad = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      const next = {
        ...this.state, form: {
          ...this.state.form, avatar: fileReader.result
        }
      };
      this.setState(next);
    };
  }

  discardAvatarUpdate = () => {
    const next = {
      ...this.state, 
        isAddingAvatar: false,
        form: {
          ...this.state.form, avatar: null
        }
    };
    this.setState(next);
  }

  render() {
    const { isAddingField, isAddingAvatar, form } = this.state;
    return (
      <div>
      <AddAvatarModal 
        isOpen={isAddingAvatar} 
        onClose={this.closeAddingAvatar}
        handleFileLoad={this.handleFileLoad}
        avatar={form.avatar}
        onDiscard={this.discardAvatarUpdate}
      />
      <Form>
        <header className="form-header">
          <div className="form-avatar-container">
            {   
              form.avatar ?
              <img src={form.avatar} /> :
              null
            }
          </div>
        </header>
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
        <div className="field-options-container">
          <Button onClick={this.toggleAddingField}>
            { isAddingField ? 'Cancel Adding Field' : 'Add Field' }
          </Button>
        </div>
      </Form>
      </div>
    );
  }
}

export default ContactForm;
