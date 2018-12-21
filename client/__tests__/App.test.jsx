import React from 'react';
import App from '../src/components/App';
import renderer from 'react-test-renderer';

test('should write "Hello"', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
