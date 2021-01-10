import React from 'react';
import { shallow } from 'enzyme';

// Components
import Tabs from './Tabs';

describe('Tabs tests', () => {
  it('Tabs renders without crashing', () => {
    shallow(<Tabs tabs={[]} />);
  });
});
