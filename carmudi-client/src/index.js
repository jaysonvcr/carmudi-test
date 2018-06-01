import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './assets/index.css';
import './assets/App.css';

import 'antd/dist/antd.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
