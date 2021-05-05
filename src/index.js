import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import { StateProvider } from './store/StoreProvider';
import reducer, { initialState } from './store/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
