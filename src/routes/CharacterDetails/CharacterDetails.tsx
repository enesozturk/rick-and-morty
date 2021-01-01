import React, { FunctionComponent } from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { EpisodeListTab, CharacterDetailsTab } from './TabViews';

// Utils & Types
import { CharacterDetailProps } from './types';
import { getCharacterDetails } from '../../utils/Query';
import { useParams } from 'react-router-dom';
import Tabs from '../../components/Tabs';

import GoBackButton from './GoBackButton';
import CharacterHeader from './CharacterHeader';

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
      <GoBackButton />
      <CharacterHeader characterDetails={characterDetails} />
      <Grid container>
        <Tabs tabs={tabs} />
      </Grid>
    </>
  ) : (
    <Grid container justify="center">
      <CircularProgress />
    </Grid>
  );
};

export default CharacterDetails;
