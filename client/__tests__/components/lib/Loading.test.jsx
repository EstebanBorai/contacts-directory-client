import React from 'react';
import { shallow } from 'enzyme';
import Loading from 'components/lib/Loading';

describe('test loading component', () => {
  let props;

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
});
