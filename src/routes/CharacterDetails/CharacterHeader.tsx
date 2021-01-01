import React, { FunctionComponent } from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// Utils & Types
import { CharacterDetailProps } from './types';

type CharacterHeaderProps = {
  characterDetails: CharacterDetailProps;
};

const CharacterHeader: FunctionComponent<CharacterHeaderProps> = ({
  characterDetails,
}: CharacterHeaderProps) => {
  return (
    <Grid container spacing={4} style={{ marginBottom: 16, marginTop: 16 }}>
      <Grid item>
        <Avatar style={{ width: 120, height: 120 }} alt="Remy Sharp" src={characterDetails.image} />
      </Grid>
      <Grid item container direction="column" justify="center" style={{ flex: 1 }}>
        <Typography variant="h2" gutterBottom>
          {characterDetails.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CharacterHeader;
