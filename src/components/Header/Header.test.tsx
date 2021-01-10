import React from 'react';
import { shallow } from 'enzyme';

// Components
import Header from './Header';

describe('Header tests', () => {
  it('Header renders without crashing', () => {
    shallow(<Header />);
  });
});
