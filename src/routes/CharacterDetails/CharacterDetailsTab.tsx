import React, { FunctionComponent } from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// Utils & Types
import { CharacterDetailProps } from './types';

type CharacterDetailsTabProps = {
  characterDetails: CharacterDetailProps;
};

const CharacterDetailsTab: FunctionComponent<CharacterDetailsTabProps> = ({
  characterDetails,
}: CharacterDetailsTabProps) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {characterDetails.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Gender: </strong>
        {characterDetails.gender}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Status: </strong>
        {characterDetails.status}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Species: </strong>
        {characterDetails.species}
      </Typography>
    </>
  );
};

export default CharacterDetailsTab;
