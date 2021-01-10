import React from 'react';
import { shallow } from 'enzyme';

// Components
import Button from './Button';

describe('Button tests', () => {
  it('Button renders without crashing', () => {
    shallow(<Button />);
  });
});
