import React from 'react';
import { shallow } from 'enzyme';
import Slots from 'components/Contacts/ContactForm/Slots';

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
    const value = 9;
    slots.instance().setFieldType(null, { value });
    expect(slots.state('fieldType')).toBe(9);
  });

  // it('update field values', () => {
  //   const event = { target: { name: 'customSlotType', value: 'test' } };
  //   slots.simulate('change', event);
  //   expect(slots.state('customSlotType')).toBe('test');
  // });
});
