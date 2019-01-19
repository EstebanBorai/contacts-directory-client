import React from 'react';
import PropTypes from 'prop-types';
import './preview-contact.css';
import { Icon, Button, Form } from 'semantic-ui-react';
import { slotTypes } from 'components/Contacts/ContactForm/constants';

class Slot extends React.Component {
  static propTypes = {
    slot: PropTypes.object.isRequired
  }

  state = {
    isEditing: false,
    fieldType: this.props.slot.type,
    value: this.props.slot.value,
    customSlotType: this.props.slot.customSlotType
  }

  toggleEditing = () => this.setState({ isEditing: !this.state.isEditing });

  setFieldType = (e, { value }) => this.setState({ fieldType: value });

  handleOnChange = (e,  { name, value }) => {
    this.setState({
      [name]: value
    });
  }

  render() {
    const { slot } = this.props;
    const { isEditing, fieldType, value, customSlotType } = this.state;
    return (
      <li className="contact-slot">
        <div className="main-data">
          {
            isEditing ?
            <React.Fragment>
              <span className="field-edit-label">Slot Type</span>
              <Form.Select
                options={slotTypes}
                placeholder="Select a field type"
                onChange={this.setFieldType}
                value={fieldType}
              />
            </React.Fragment> :
            <em>
              {slot.type <= 8 ? slotTypes[slot.type].text : slot.customSlotType}
            </em>
          }
          {
            isEditing ?
            fieldType && fieldType === 9 ? 
              <React.Fragment>
                <span className="field-edit-label">Custom Slot Name</span>
                <Form.Input
                  type="text"
                  name="customSlotType"
                  onChange={this.handleOnChange} 
                  value={customSlotType}
                />
              </React.Fragment> : 
              null : null
          }
            {
              isEditing ?
              <React.Fragment>
                <span className="field-edit-label">Slot Value</span>
                <Form.Input
                  name="value"
                  type="text"
                  onChange={this.handleOnChange}
                  value={value}
                />
              </React.Fragment> :
              <div className="contact-slot-field">
                <Icon name="phone" color="grey" />
                <span>{slot.value}</span>
              </div>
            }
        </div>
        <Button icon onClick={this.toggleEditing}>
          <Icon name="edit" />
        </Button>
      </li>
    );
  }
}

export default Slot;
