import { icons } from './icons';
import { tags } from './tags';
import { combineReducers } from 'redux';

export const reducer = combineReducers({ 
    icons,
    tags
});

export type State = ReturnType<typeof reducer>;
