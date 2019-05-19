import * as React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './components/Root';
import {reducer} from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './util/font-awesome';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);