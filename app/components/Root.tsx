/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { App } from './App';

export const Root = ({ store }: { store: Store }) => 
    <Provider store={store}>
        <App />
    </Provider>;