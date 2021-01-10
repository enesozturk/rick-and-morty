import React, { useState as useStateMock } from 'react';
import renderer, { act } from 'react-test-renderer';
import {
  render,
  fireEvent,
  getByTestId,
  waitForElementToBeRemoved,
  getByText,
  queryByText,
} from '@testing-library/react';

import CharacterList from './CharacterList';
import { getCharacterList } from '../../utils/Query';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CharacterListProps } from './types';

type initialStateProps = {
  characterList: CharacterListProps | null;
  fetchLoading: boolean;
};

Enzyme.configure({ adapter: new Adapter() });

describe('CharacterList tests', () => {
  it('CharacterList renders without crashing', () => {
    shallow(<CharacterList />);
  });

  it('Displays loading indicator while fetching list', () => {
    const wrapper = shallow(<CharacterList />);
    expect(wrapper.find('.character-list-loading')).toHaveLength(1);
  });

  it('Receiving character list data as expected', async () => {
    return getCharacterList(1).then((data) => {
      expect(data).toHaveProperty('characters');
    });
  });

  it('Removes loading indicator after fetching data', () => {
    const { queryByText } = render(<CharacterList />);

    expect(queryByText('character-list-loading')).toBeNull();
  });
});
