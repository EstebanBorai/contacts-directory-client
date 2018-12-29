import React from 'react';
import ToolsBar from 'components/Contacts/ToolsBar';
import { shallow } from 'enzyme';

describe('Contacts/ToolsBar renderization and usage', () => {
  let toolsBar;
  let openCreateModal;

  beforeEach(() => {
    openCreateModal = jest.fn();
    const props = { openCreateModal };
    toolsBar = shallow(<ToolsBar {...props} />);
  });

  it('should render an ul', () => {
    expect(toolsBar.find('ul').exists()).toBe(true);
  });

  it('should call "openCreateModal" on click', () => {
    toolsBar.find('li').last().simulate('click');
    expect(openCreateModal.mock.calls.length).toBe(1);
  });
});
