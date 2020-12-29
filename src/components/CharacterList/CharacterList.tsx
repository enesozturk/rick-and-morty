import React, { FunctionComponent } from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import CharacterCard from '../CharacterCard';

// Utils & Types
import { CharacterListProps } from './types';
import { CharacterProps } from '../CharacterCard';
import { getCharacterList } from '../../utils/Query';

const CharacterList: FunctionComponent = () => {
  const [characterList, setCharacterList] = React.useState<CharacterListProps | null>(null);

  React.useEffect(() => {
    getCharacterList()
      .then((data) => {
        setCharacterList(data.characters);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Grid container spacing={2}>
      {characterList &&
        characterList.results.map((item: CharacterProps, index: number) => {
          return <CharacterCard character={item} key={index} />;
        })}
    </Grid>
  );
};

export default CharacterList;
