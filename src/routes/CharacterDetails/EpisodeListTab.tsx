import React, { FunctionComponent } from 'react';

// Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Utils & Types
import { Episode } from './types';

type EpisodeListTabProps = {
  episodes: Episode[];
};

const EpisodeListTab: FunctionComponent<EpisodeListTabProps> = ({
  episodes,
}: EpisodeListTabProps) => {
  return (
    <List aria-label="character-episode-list" style={{ padding: 0 }}>
      {episodes.map((item, index) => {
        return (
          <ListItem button>
            <ListItemText primary={item.name} secondary={item.episode} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default EpisodeListTab;
