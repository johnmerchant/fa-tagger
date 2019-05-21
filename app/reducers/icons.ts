import { Icons } from '../@types/icons';
import { IconsAction } from "../actions/icons";
import { TagsAction } from '../actions/tags';
import { IconTags } from '../@types/tags';

interface State {
    filter?: string;
    filtered?: Icons;
    icons?: Icons;
    iconTags?: IconTags;
    isLoading: boolean;
    isLoaded: boolean;
    error?: Error;
};

export const icons = (state: State = { isLoading: false, isLoaded: false }, action: IconsAction | TagsAction) => {
    switch (action.type) {
        case 'TAGS_UPDATE':
            return {
                ...state, 
                iconTags: action.tags 
                    ? Object.keys(action.tags)
                        .map(key => ({ key, tag: action.tags[key] }))
                        .reduce<{ icon: string, tag: string }[]>((x, y) => 
                            x.concat(y.tag.icons.map(z => ({ icon: z, tag: y.key }))), [])
                        .reduce<IconTags>((map, {icon, tag}) => {
                            map[icon] = map[icon] || [];
                            map[icon].push(tag);
                            return map;
                        }, {})
                    : {}
            };
        case 'FETCH_ICONS_SUCCESS':
            return {...state, isLoading: false, isLoaded: true, error: null, icons: action.icons };
        case 'FETCH_ICONS_REQUEST':
            return { ...state, isLoading: true, isLoaded: false, error: null };
        case 'FETCH_ICONS_FAILURE':
            return {...state, isLoading: false, isLoaded: false, error: action.error };
        case 'FILTER_ICONS':
            if (state.icons && action.filter) {
                let filtered = {...state.icons};
                let expr = new RegExp(action.filter, 'gi');
                for (const key in filtered) {
                    const icon = filtered[key];
                    const match = expr.test(key)
                        || (state.iconTags[key] && state.iconTags[key].some(tag => expr.test(tag)))
                        || expr.test(icon.label) 
                        || icon.search.terms.some(term => expr.test(term));
                    if (!match) {
                        delete filtered[key];
                    }
                }
                return {...state, filtered, filter: action.filter };
            } else {
                return {...state, filtered: null, filter: action.filter };
            }
        default: return { ...state };
    }
};

