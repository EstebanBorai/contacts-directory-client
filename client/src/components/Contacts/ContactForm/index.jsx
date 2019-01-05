import React from 'react';
import './contact-form.css';
import { Form, Button, Divider } from 'semantic-ui-react';
import Slots from './Slots';
import AddAvatarModal from './AddAvatarModal';
import Dates from './Dates';
import { slotTypes, months as monthCollection } from './constants';
import ContactsContext from 'contexts/ContactsContext';

class ContactForm extends React.Component {
  static contextType = ContactsContext.Consumer;

  constructor(props, context) {
    super(props, context);

    this.state = {
      isAddingField: false,
      isCustomField: false,
      isAddingAvatar: false,
      isAddingDate: false,
      form: {
        firstName: '',
        lastName: '',
        department: '',
        slots: [],
        dates: [],
        avatar: null
      }
    };
  }

  get isFormInvalid() {
    const form = this.state.form;
    if (!form.firstName || !form.lastName || !form.department) {
      return true;
    }
    return false;
  }

  get slots() {
    if (this.state.form.slots && this.state.form.slots.length > 0) {
      return (
        <React.Fragment>
          <Divider />
          <ul className="contact-slots">
            {
              this.state.form.slots.map((slot, index) => (
                <li key={index}>
                  {
                    slot.type === 9 ?
                    <h4>{slot.customName}</h4> :
                    <h4>{slotTypes[slot.type].text}</h4>
                  }
                  <p>{slot.value}</p>
                </li>
              ))
            }
          </ul>
        </React.Fragment>
      )
    }
  }

  get dates() {
    if (this.state.form.dates && this.state.form.dates.length > 0) {
      return (
        <React.Fragment>
          <Divider />
          <ul className="contact-dates">
            {
              this.state.form.dates.map((date, index) => (
                <li key={index}>
                  <span>{monthCollection[date.month - 1].text}</span>&nbsp;&#47;&nbsp;
                  <span>{date.day}</span>&nbsp;&#47;&nbsp;
                  <span>{date.year}</span>
                </li>
              ))
            }
          </ul>
          <Divider />
        </React.Fragment>
      )
    }
  }

  toggleAddingField = () => this.setState({ isAddingField: !this.state.isAddingField });
  toggleAddingDate = () => this.setState({ isAddingDate: !this.state.isAddingDate });

  openAddingAvatar = () => this.setState({ isAddingAvatar: true });
  closeAddingAvatar = () => this.setState({ isAddingAvatar: false });

  handleChange = (e, { name, value }) => {
    this.setState({
      form: { ...this.state.form, [name]: value  }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await this.context.actions.create(this.state.form);
    } catch (error) {
      console.error(error);
      this.setState({ error });
    }
  }

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
      ...this.state, 
        isAddingField: false,
        form: { 
        ...this.state.form, slots: [ 
          ...this.state.form.slots, {
            type, customName, value 
          } 
        ] 
      } 
    };

    this.setState(next);
  }

  /**
   * Appends a `date` object to the collection of dates.
   * 
   * @param {Object} date - Date.
   * @param {number} date.day - Day of the month.
   * @param {number} date.month - Month number.
   * @param {number} date.year - Year.
   */
  addDate = ({ day, month, year }) => {
    const next = {
      ...this.state,
        isAddingDate: false,
        form: {
        ...this.state.form, dates: [
          ...this.state.form.dates, {
            day: Number(day), 
            month,
            year: Number(year)
          }
        ]
      }
    }
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
    const { isAddingField, isAddingAvatar, isAddingDate, form, error } = this.state;
    return (
      <div>
      <AddAvatarModal 
        isOpen={isAddingAvatar} 
        onClose={this.closeAddingAvatar}
        handleFileLoad={this.handleFileLoad}
        avatar={form.avatar}
        onDiscard={this.discardAvatarUpdate}
      />
      <Form onSubmit={this.handleSubmit}>
        <header className="form-header">
          <div 
            className="form-avatar-container" 
            onClick={this.openAddingAvatar}
          >
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
        {
          isAddingField ?
          <Slots 
            onSelect={this.addSlot} 
            onCancel={this.toggleAddingField} 
          /> :
          this.slots
        }
        {
          isAddingDate ?
          <Dates 
            onSelect={this.addDate} 
            onCancel={this.toggleAddingDate}
          /> :
          this.dates
        }
        <div className="field-options-container">
          {
            isAddingField ? 
              null : 
              <Button onClick={this.toggleAddingField}>
                Add Field
              </Button>
          }
          {
            isAddingDate ?
            null :
            <Button onClick={this.toggleAddingDate}>
              Add Date
            </Button>
          }
        </div>
        {
          error ?
          <p>{JSON.stringify(error)}</p> :
          null
        }
        <div id="controls-align">
          <Button 
            primary 
            type="submit"
            disabled={this.isFormInvalid}
          >
            Create
          </Button>
        </div>
      </Form>
      </div>
    );
  }
}

export default ContactForm;
