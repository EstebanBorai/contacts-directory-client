import React from 'react';
import { shallow, mount } from 'enzyme';
import Loading from 'components/lib/Loading';

describe('<Loading />', () => {
  it('renders without a loading icon if context state "loading" is false', () => {
    const context = { state: { loading: false } };
    const wrapper = mount(<Loading />, context);
    expect(wrapper.exists('Loader')).toBe(false);
  });

  it('renders a loading icon when "loading" state is true', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.exists('Loader')).toBe(true);
  });
});
