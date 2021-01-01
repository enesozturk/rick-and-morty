import React, { FunctionComponent } from 'react';

// Components
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import { ArrowLeft } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const GoBackButton: FunctionComponent = () => {
  const history = useHistory();

  const goHomeHandler = () => {
    history.push('/');
  };

  return (
    <Breadcrumbs maxItems={2} aria-label="breadcrumb">
      <Button onClick={goHomeHandler} startIcon={<ArrowLeft />}>
        Home
      </Button>
    </Breadcrumbs>
  );
};

export default GoBackButton;
