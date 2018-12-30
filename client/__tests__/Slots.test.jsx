import React from 'react';
import { shallow } from 'enzyme';
import Slots from 'components/Contacts/ContactForm/Slots';
import { Form } from 'semantic-ui-react';

describe('Contacts/ContactForm/Slots renderization and usage', () => {
  let props;
  let slots;

  beforeEach(() => {
    props = {
      onSelect: jest.fn()
    };
    slots = shallow(<Slots {...props} />);
  });

  it('should render a div element', () => {
    expect(slots.find('div').exists()).toBe(true);
  });

  it('should setFieldType', () => {
    const value = { key: 2, text: 'Work', value: 2 };
    slots.instance().setFieldType(null, { value });
    expect(slots.state('fieldType')).toEqual(value);
  });

  it('should not render Form.Input by default', () => {
    expect(slots.find('Form.Input').exists()).toBe(false);
  });

  it('renders input if custom field is selected', () => {
    const value = { key: 9, text: 'Custom', value: 9 };
    slots.instance().setFieldType(null, { value });
    expect(slots.find(<Form.Input />).exists()).toBe(true);
  });

  it('update field values', () => {
    const event = { target: { name: 'customName', value: 'test' } };
    slots.simulate('change', event);
    expect(slots.state('customNave')).toBe('test');
  });
});
