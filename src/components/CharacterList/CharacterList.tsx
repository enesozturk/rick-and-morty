import React, { FunctionComponent } from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import CharacterCard from '../CharacterCard';

const List = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const CharacterList: FunctionComponent = () => {
  return (
    <Grid container spacing={2}>
      {List.map((item, index) => {
        return <CharacterCard key={index} />;
      })}
    </Grid>
  );
};

export default CharacterList;
