import produce from 'immer';
import { Tags } from "../@types/tags";
import { TagsAction } from '../actions/tags';
import { Reducer } from 'redux';

export interface State {
    tags?: Tags;
}

const initialState: State = {};

export const tags: Reducer<State> = produce((state: State, action: TagsAction) => {
    switch (action.type) {
        case 'TAGS_UPDATE':
            state.tags = action.tags;
            break;
    }
}, initialState);