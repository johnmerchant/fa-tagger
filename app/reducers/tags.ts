import produce from 'immer';
import { Tags } from "../@types/tags";
import { TagsAction } from '../actions/tags';

export interface State {
    tags?: Tags;
}

export const tags = produce((state: State, action: TagsAction) => {
    switch (action.type) {
        case 'TAGS_UPDATE':
            state.tags = action.tags;
            break;
    }
}, {});