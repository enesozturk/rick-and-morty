import React, { FunctionComponent } from 'react';

// Components
import Typography from '@material-ui/core/Typography';

// Utils & Types
import { CharacterDetailProps } from './types';
import { getCharacterDetails } from '../../utils/Query';
import { useParams } from 'react-router-dom';

interface RouteParams {
  id: string;
}

const CharacterDetails: FunctionComponent = () => {
  const { id } = useParams<RouteParams>();
  const [characterDetails, setCharacterDetails] = React.useState<CharacterDetailProps | null>(null);

  React.useEffect(() => {
    getCharacterDetails(parseInt(id))
      .then((data) => {
        setCharacterDetails(data.character);
      })
      .catch((error) => console.error(error));
  }, []);

  return characterDetails ? (
    <>
      <Typography variant="h1" gutterBottom>
        {characterDetails.name}
      </Typography>
    </>
  ) : null;
};

export default CharacterDetails;
