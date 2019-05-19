import fetch from 'cross-fetch';
import * as YAML from 'yaml';
import { Dispatch, ActionCreator, Action } from 'redux';
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Icons } from '../@types/icons';

export type FETCH_ICONS_REQUEST = 'FETCH_ICONS_REQUEST';
export type FetchIconsRequest = Action<FETCH_ICONS_REQUEST>;
export const fetchIconsRequest: ActionCreator<FetchIconsRequest> = () => ({type: 'FETCH_ICONS_REQUEST'});

export type FETCH_ICONS_FAILURE = 'FETCH_ICONS_FAILURE';
export type FetchIconsFailure = Action<FETCH_ICONS_FAILURE> & { error: Error };
export const fetchIconsFailure: ActionCreator<FetchIconsFailure> = (error: Error) => ({type: 'FETCH_ICONS_FAILURE', error });

export type FETCH_ICONS_SUCCESS = 'FETCH_ICONS_SUCCESS';
export type FetchIconsSuccess = Action<FETCH_ICONS_SUCCESS> & { icons: Icons };
export const fetchIconsSuccess: ActionCreator<FetchIconsSuccess> = (icons: Icons) => ({type: 'FETCH_ICONS_SUCCESS', icons});

export type FILTER_ICONS = 'FILTER_ICONS';
export type FilterIcons = Action<FILTER_ICONS> & { filter?: string };
export const filterIcons: ActionCreator<FilterIcons> = (filter?: string) => ({
    type: 'FILTER_ICONS', 
    filter,
    meta: {
        debounce: {
            time: 100,
            leading: false,
            trailing: true
        }
    }
 });

export type IconsAction = FetchIconsRequest | FetchIconsFailure | FetchIconsSuccess | FilterIcons;

export const fetchIcons = () => async (dispatch: Dispatch) => {
    dispatch(fetchIconsRequest());
    try {
        const response = await fetch('https://gitcdn.xyz/repo/FortAwesome/Font-Awesome/master/metadata/icons.yml');
        if (!response.ok) {
            dispatch(fetchIconsFailure(new Error(`Response status not OK: ${response.status} ${response.statusText}`)));
            return;
        }
        const text = await response.text();
        const icons: Icons = YAML.parse(text);

        library.reset();
        for (const key in icons) {
            let fasIcon: IconDefinition = null;
            for (const fasKey in fas) {
                if (fas[fasKey].iconName === key) {
                    fasIcon = fas[fasKey];
                    break;
                }
            }
            if (fasIcon) {
                library.add(fasIcon);
            }
            else {
                delete icons[key];
            }
        }

        dispatch(fetchIconsSuccess(icons));
    } catch (err) {
        library.reset();
        dispatch(fetchIconsFailure(err));
    }
};