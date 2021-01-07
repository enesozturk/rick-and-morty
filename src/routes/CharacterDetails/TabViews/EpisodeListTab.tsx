import React, { FunctionComponent } from 'react';

// Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SeeAllButton from '../SeeAllButton';

// Utils & Types
import { Episode } from '../types';

type EpisodeListTabProps = {
  episodes: Episode[];
};

const EpisodeListTab: FunctionComponent<EpisodeListTabProps> = ({
  episodes,
}: EpisodeListTabProps) => {
  const [episodeList, setEpisodeList] = React.useState<Episode[]>(episodes.slice(0, 5));
  const [seeAll, setSeeAll] = React.useState<boolean>(false);

  const seeAllHandler = () => {
    setEpisodeList(episodes);
    setSeeAll(true);
  };

  return (
    <List aria-label="character-episode-list" style={{ padding: 0 }}>
      {episodeList.map((item, index) => {
        return (
          <ListItem key={index} button>
            <ListItemText primary={item.name} secondary={item.episode} />
          </ListItem>
        );
      })}
      {!seeAll && <SeeAllButton onClick={seeAllHandler} />}
    </List>
  );
};

export default EpisodeListTab;
