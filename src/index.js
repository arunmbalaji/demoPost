import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Amplify from '@aws-amplify/core';
import { Auth, Storage } from 'aws-amplify';
import App from './App';
import * as serviceWorker from './serviceWorker';

import config from './aws-exports';
Amplify.configure(config);
Auth.configure(config);
Storage.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
