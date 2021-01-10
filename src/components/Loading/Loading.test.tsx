import React from 'react';
import { shallow } from 'enzyme';

// Components
import Loading from './Loading';

describe('Loading tests', () => {
  it('Loading renders without crashing', () => {
    shallow(<Loading />);
  });
});
