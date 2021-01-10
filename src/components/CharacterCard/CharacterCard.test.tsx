import React from 'react';
import { shallow } from 'enzyme';

// Components
import CharacterCard from './CharacterCard';

const character = {
  id: 1,
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

describe('CharacterCard tests', () => {
  it('CharacterCard renders without crashing', () => {
    shallow(<CharacterCard character={character} />);
  });
});
