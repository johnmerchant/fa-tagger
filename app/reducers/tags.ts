import { Tags, IconTags } from "../@types/tags";
import { TagsAction } from '../actions/tags';
export interface State {
    tags?: Tags;
    iconTags?: IconTags;
}

export const tags = (state: State = { }, action: TagsAction) => {
    switch (action.type) {
        case 'TAGS_UPDATE':
            return { 
                ...state, 
                tags: action.tags,
                iconTags: action.tags 
                    ? Object.keys(action.tags)
                        .map(key => ({ key, tag: action.tags[key] }))
                        .reduce<{ icon: string, tag: string }[]>((x, y) => x.concat(y.tag.icons.map(z => ({ icon: z, tag: y.key }))), [])
                        .reduce((map, {icon, tag}) => {
                            map[icon] = map[icon] || [];
                            map[icon].push[tag];
                            return map;
                        }, new Map<string, string>())
                    : {}
            };
        default: return {...state};
    }
};