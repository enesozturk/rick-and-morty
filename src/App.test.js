import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from './App';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
