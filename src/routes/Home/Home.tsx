import React, { FunctionComponent } from 'react';

// Components
import CharacterList from '../../components/CharacterList';
import Typography from '@material-ui/core/Typography';

// Styles
import './Home.scss';

const Home: FunctionComponent = () => {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Rick and Morty
      </Typography>
      <CharacterList />
    </>
  );
};

export default Home;
