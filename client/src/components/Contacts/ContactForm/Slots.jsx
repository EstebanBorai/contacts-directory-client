import React from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';
import { slotTypes } from './constants';
import PropTypes from 'prop-types';

class Slots extends React.Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  state = {
    slotType: '',
    customSlotType: undefined,
    value: '',
    fieldType: 1
  }

  setFieldType = (e, { value }) => this.setState({ fieldType: value });
  handleOnChange = (e,  { name, value }) => {
    this.setState({
      [name]: value
    });
  }

  render() {
    const { fieldType, customSlotType, value } = this.state; 
    const { onSelect, onCancel } = this.props;
    return (
      <div>
        <Form.Select
          fluid
          label="Field Type"
          options={slotTypes}
          placeholder="Select a field type"
          onChange={this.setFieldType}
        />
        {
          fieldType && fieldType === 9 ? 
          <Form.Input 
            label="Field Name" 
            type="text"
            name="customSlotType"
            onChange={this.handleOnChange} 
          /> : 
          null
        }
        <Form.Input
          name="value"
          label="Field Value" 
          type="text"
          onChange={this.handleOnChange}
        />
        <Button 
          primary
          onClick={onSelect.bind(null, { type: fieldType, customSlotType, value  })}
        >
          Confirm
        </Button>
        <Button
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Divider />
      </div>
    );
  }
}

export default Slots;
