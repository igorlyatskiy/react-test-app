import createSagaMiddleware from '@redux-saga/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import { watchGetInfo } from './redux/sagas';
import joinReducers from './redux/joinReducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(joinReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchGetInfo)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
