import React, { FunctionComponent } from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading: FunctionComponent = () => {
  return (
    <Grid container justify="center">
      <CircularProgress />
    </Grid>
  );
};

export default Loading;
