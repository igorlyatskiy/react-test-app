import createSagaMiddleware from '@redux-saga/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import joinReducers from './redux/joinReducers';
import { watchGetPosts } from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(joinReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchGetPosts)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
