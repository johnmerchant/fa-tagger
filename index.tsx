/** @jsx jsx */
import { jsx } from '@emotion/core';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import {Root} from './app/components/Root';
import {reducer} from './app/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounced';

const store = createStore(
  reducer,
  applyMiddleware(thunk, createDebounce())
);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);