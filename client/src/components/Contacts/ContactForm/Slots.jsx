import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const slotTypes = [
  { key: 1, text: 'Mobile', value: 1 },
  { key: 2, text: 'Work', value: 2 },
  { key: 3, text: 'Home', value: 3 },
  { key: 4, text: 'Main', value: 4 },
  { key: 5, text: 'Work Fax', value: 5 },
  { key: 6, text: 'Home Fax', value: 6 },
  { key: 7, text: 'Pager', value: 7 },
  { key: 8, text: 'Other', value: 8 },
  { key: 9, text: 'Custom', value: 9 }
];

class Slots extends React.Component {
  state = {
    slotType: '',
    customName: undefined,
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
    const { fieldType, customName, value } = this.state; 
    const { onSelect } = this.props;
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
            name="customName"
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
        <Button onClick={onSelect.bind(null, { type: fieldType, customName, value  })}>
          Confirm
        </Button>
      </div>
    );
  }
}

export default Slots;
