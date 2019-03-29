// Polyfills
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { store } from 'store/index';
import App from 'containers/App';

const root = document.getElementById('react');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  root,
);
