import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { App } from './app';

export const Root = ({ store }: { store: Store }) => 
    <Provider store={store}>
        <App />
    </Provider>;