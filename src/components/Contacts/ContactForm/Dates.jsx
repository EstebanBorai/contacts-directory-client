import React from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';
import { months } from './constants';

function getMaxDays(year, month) {
  const isLeap = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  const thirtyOne = [1, 3, 5, 7, 8, 10, 12];
  if (month === 2) {
    return isLeap ? 29 : 28;
  } else {
    if (thirtyOne.indexOf(month) > -1) {
      return 31;
    } else {
      return 30;
    }
  }
}

class Dates extends React.Component {
  state = {
    dates: [],
    day: 0,
    month: 0,
    year: 0,
    label: ''
  }

  handleOnChange = (e, { name, value }) => this.setState({ [name]: value });

  setMonth = (e, { value }) => {
    this.setState({ 
      maxDays: getMaxDays(this.state.year, value),
      month: value
    });
  };

  setDay = (e, { value }) => this.setState({ day: value });

  setYear = (e, { value }) => {
    this.setState({
      maxDays: getMaxDays(value, this.state.month),
      year: value
    });
  }

  componentDidMount() {
    const today = new Date();
    this.setState({
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear(),
      maxDays: getMaxDays(today.getFullYear(), today.getMonth() + 1)
    });
  }

  render() {
    const { onSelect, onCancel } = this.props;
    const { day, month, year, maxDays, label } = this.state;
    return (
      <div>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Label"
          name="label"
          onChange={this.handleOnChange}
          value={label}
        />
        <Form.Select
          fluid
          label="Month"
          options={months}
          name="month"
          placeholder="Select a Month"
          onChange={this.setMonth}
          value={month}
        />
        <Form.Input 
          fluid
          label="Day" 
          type="number"
          name="day"
          onChange={this.setDay}
          value={day}
          error={day > maxDays}
        />
        <Form.Input
          fluid
          name="year"
          label="Year" 
          type="number" 
          onChange={this.setYear}
          value={year}
          />
        </Form.Group>
        <Button 
          primary
          onClick={onSelect.bind(null, { dateValue: new Date(`${month}/${day}/${year}`), label })}
          disabled={day > maxDays}
        >
          Confirm
        </Button>
        <Button onClick={onCancel}>
          Cancel
        </Button>
        <Divider />
        </div>
    );
  }
}

export default Dates;
