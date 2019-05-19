import { Dispatch, ActionCreator, Action } from 'redux';
import { Tags } from '../@types/tags';

export type TAGS_UPDATE = 'TAGS_UPDATE';
export type TagsUpdate = Action<TAGS_UPDATE> & { tags: Tags };
export const tagsUpdate: ActionCreator<TagsUpdate> = (tags: Tags) => ({type: 'TAGS_UPDATE', tags});
export type TagsAction = TagsUpdate;

export const getTags = () => (dispatch: Dispatch) => dispatch(tagsUpdate(loadTags()));

export const setTag = () => (dispatch: Dispatch) => (id: string, icon: string) => {
    const tags = loadTags();
    if (id in tags && !tags[id].icons.some(i => i === icon)) {
        tags[id].icons.push(icon);
        saveTags(tags);
        dispatch(tagsUpdate(tags));
    } else {
        tags[id] = {
            description: '',
            icons: [icon]
        };
        saveTags(tags);
        dispatch(tagsUpdate(tags));
    }
};

export const unsetTag = () => (dispatch: Dispatch) => (id: string, icon: string) => {
    const tags = loadTags();
    if (id in tags && tags[id].icons.some(i => i === icon)) {
        tags[id].icons = tags[id].icons.filter(i => i === icon);
        saveTags(tags);
        dispatch(tagsUpdate(tags));
    }
};

export const deleteTag = () => (dispatch: Dispatch) => (id: string) => {
    const tags = loadTags();
    if (id in tags) {
        delete tags[id];
        saveTags(tags);
        dispatch(tagsUpdate(tags));
    }
}

export const setTagDescription = () => (dispatch: Dispatch) => (id: string, description: string) => {
    const tags = loadTags();
    if (id in tags) {
        tags[id].description = description;
        saveTags(tags);
        dispatch(tagsUpdate(tags));
    }
}

const loadTags: () => Tags = () => JSON.parse(window.localStorage.getItem('tags')) || {};
const saveTags = (tags: Tags) => window.localStorage.setItem('tags', JSON.stringify(tags));