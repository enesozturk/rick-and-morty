import React, { FunctionComponent } from 'react';

// Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Utils & Types
import { CharacterDetailProps } from '../types';

type CharacterDetailsTabProps = {
  characterDetails: CharacterDetailProps;
};

const CharacterDetailsTab: FunctionComponent<CharacterDetailsTabProps> = ({
  characterDetails,
}: CharacterDetailsTabProps) => {
  return (
    <>
      <List aria-label="character-episode-list" style={{ padding: 0 }}>
        <ListItem button>
          <ListItemText primary={characterDetails.gender} secondary={'Gender'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={characterDetails.status} secondary={'Status'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={characterDetails.species} secondary={'Species'} />
        </ListItem>
      </List>
    </>
  );
};

export default CharacterDetailsTab;
