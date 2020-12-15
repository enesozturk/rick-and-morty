import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';

import Routes from './routes';

import './App.css';

const App: FunctionComponent = () => (
  <>
    <Routes />
  </>
);

export default hot(App);
