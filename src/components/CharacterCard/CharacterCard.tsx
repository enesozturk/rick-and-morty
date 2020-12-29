import React from 'react';

// Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Utils & Types
import { CharacterProps } from './types';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

type CharacterCardProps = {
  character: CharacterProps;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  const history = useHistory();
  const classes = useStyles();

  const routeToCharacterDetails = () => {
    history.push(`/character/${character.id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.root}>
        <CardActionArea onClick={routeToCharacterDetails}>
          <CardMedia
            className={classes.media}
            image={character.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {character.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            See Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CharacterCard;
