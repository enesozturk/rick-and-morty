import React from 'react';
import renderer from 'react-test-renderer';

import Home from './Home';

describe('Home Screen', () => {
  it('Renders as expected', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
