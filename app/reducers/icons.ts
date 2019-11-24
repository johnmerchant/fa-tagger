import produce from 'immer';
import { Icons } from '../@types/icons';
import { IconsAction } from "../actions/icons";
import { TagsAction } from '../actions/tags';
import { IconTags, Tags, Tag } from '../@types/tags';

interface State {
    filter?: string;
    filtered?: Icons;
    icons?: Icons;
    iconTags?: IconTags;
    isLoading: boolean;
    isLoaded: boolean;
    error?: Error;
};

const initialState = { isLoading: false, isLoaded: false };

export const icons = produce((state: State, action: IconsAction | TagsAction) => {
    switch (action.type) {
        case 'TAGS_UPDATE':
            state.iconTags = filterIcons(action.tags);
            return;
        case 'FETCH_ICONS_SUCCESS':
            state.isLoading = false;
            state.isLoaded = true;
            state.error = null;
            state.icons = action.icons;
            return;
        case 'FETCH_ICONS_REQUEST':
            state.isLoading = true;
            state.isLoaded = false;
            state.error = null;
            return;
        case 'FETCH_ICONS_FAILURE':
            state.isLoading = false;
            state.isLoaded = false;
            state.error = action.error;
            return;
        case 'FILTER_ICONS':
            state.filter = action.filter;
            if (state.icons && state.filter) {
                state.filtered = {...state.icons};
                let expr = new RegExp(action.filter, 'gi');
                for (const key in state.filtered) {
                    const icon = state.filtered[key];
                    const match = expr.test(key)
                        || (state.iconTags[key] && state.iconTags[key].some(tag => expr.test(tag)))
                        || expr.test(icon.label) 
                        || icon.search.terms.some(term => expr.test(term));
                    if (!match) {
                        delete state.filtered[key];
                    }
                }
            } else {
                state.filtered = null;
            }
            return;
    }
}, initialState);

type IconTag = { icon: string, tag: string };

const reduceIconTagKeys = produce((x: IconTag[], y: { key: string, tag: Tag }) => {
    x.push(...y.tag.icons.map(z => ({ icon: z, tag: y.key })));
});

const reduceIconTags = produce((map: IconTags, { icon, tag }: { icon: string, tag: string }) => {
    map[icon] = map[icon] || [];
    map[icon].push(tag);
});

const filterIcons = (tags?: Tags) => {
    if (!tags) return {};
    return Object.keys(tags)
        .map(key => ({ key, tag: tags[key] }))
        .reduce(reduceIconTagKeys, [])
        .reduce(reduceIconTags, {});
};