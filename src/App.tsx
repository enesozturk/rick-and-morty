import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';

// Components
import Routes from './routes';

// Styles
import './App.css';

const App: FunctionComponent = () => <Routes />;

export default hot(App);
