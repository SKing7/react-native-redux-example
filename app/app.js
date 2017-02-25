// @flow

import React from 'react';
import { Provider } from 'react-redux';
import Router from './containers/router/router';
import configureStore from './store/configureStore';

// Store & Router
const store = configureStore({});

const app = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default app;
