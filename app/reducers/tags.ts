import { Tags } from "../@types/tags";
import { TagsAction } from '../actions/tags';

export interface State {
    tags?: Tags;
}

export const tags = (state: State = { }, action: TagsAction) => {
    switch (action.type) {
        case 'TAGS_UPDATE':
            return { ...state, tags: action.tags };
        default: return {...state};
    }
};