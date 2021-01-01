import React, { FunctionComponent } from 'react';

// Components
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core';

type SeeAllButtonProps = {
  onClick: () => void;
};

const useStyles = makeStyles({
  root: {
    background: 'rgba(0, 0, 0, 0.04)',
    borderRadius: 4,
    marginTop: 16,
  },
});

const SeeAllButton: FunctionComponent<SeeAllButtonProps> = ({ onClick }: SeeAllButtonProps) => {
  const classes = useStyles();

  return (
    <ListItem button onClick={onClick} className={classes.root}>
      See All
    </ListItem>
  );
};

export default SeeAllButton;
