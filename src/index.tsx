import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { setConfig } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

// Components
import App from './App';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createMuiTheme } from '@material-ui/core';

// Utils
import store from './store';

// Styles
import './styles/global.scss';

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const Root: FunctionComponent = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <Box p="32px 24px">
            <App />
          </Box>
        </Container>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
