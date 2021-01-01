import React, { FunctionComponent } from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import EpisodeListTab from './EpisodeListTab';
import CharacterDetailsTab from './CharacterDetailsTab';

// Utils & Types
import { CharacterDetailProps } from './types';
import { getCharacterDetails } from '../../utils/Query';
import { useParams } from 'react-router-dom';
import Tabs from '../../components/Tabs';

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

  const tabs = characterDetails
    ? [
        {
          title: 'Character Details',
          content: <CharacterDetailsTab characterDetails={characterDetails} />,
        },
        {
          title: 'Episodes',
          content: <EpisodeListTab episodes={characterDetails.episode} />,
        },
      ]
    : [];

  return characterDetails ? (
    <>
      <Grid container spacing={4} style={{ marginBottom: 16 }}>
        <Grid item>
          <Avatar
            style={{ width: 120, height: 120 }}
            alt="Remy Sharp"
            src={characterDetails.image}
          />
        </Grid>
        <Grid item container direction="column" justify="center" style={{ flex: 1 }}>
          <Typography variant="h2" gutterBottom>
            {characterDetails.name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Tabs tabs={tabs} />
      </Grid>
    </>
  ) : null;
};

export default CharacterDetails;
