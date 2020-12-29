import { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './Home';
import CharacterDetails from './CharacterDetails';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/character/:id" exact component={CharacterDetails} />
  </Switch>
);

export default Routes;
