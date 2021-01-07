import React, { FunctionComponent } from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import CharacterCard from '../CharacterCard';
import { Waypoint } from 'react-waypoint';

// Utils & Types
import { CharacterListProps } from './types';
import { CharacterProps } from '../CharacterCard';
import { getCharacterList } from '../../utils/Query';

const CharacterList: FunctionComponent = () => {
  const [characterList, setCharacterList] = React.useState<CharacterListProps | null>(null);
  const [fetchLoading, setFetchLoading] = React.useState(false);

  const fetchCharacters = () => {
    setFetchLoading(true);
    const page = characterList && characterList.info.next ? characterList.info.next : 1;

    getCharacterList(page)
      .then((data) => {
        const info = data.characters.info;
        const results = characterList
          ? characterList.results.concat(data.characters.results)
          : data.characters.results;

        setTimeout(() => {
          setCharacterList({
            info,
            results,
          });
          setFetchLoading(false);
        }, 300);
      })
      .catch(() => {
        setFetchLoading(false);
      });
  };

  React.useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Grid container spacing={2} justify="center">
      {characterList ? (
        characterList.results.map((item: CharacterProps, index: number) => {
          return (
            <>
              <CharacterCard character={item} key={index} />
              {index + 1 == characterList.results.length && (
                <Waypoint key={index} onEnter={fetchCharacters} />
              )}
            </>
          );
        })
      ) : (
        <div className="character-list-loading">
          <CircularProgress />
        </div>
      )}
      {characterList && fetchLoading && (
        <div className="character-new-list-loading">
          <CircularProgress style={{ marginTop: 16 }} />
        </div>
      )}
    </Grid>
  );
};

export default CharacterList;
