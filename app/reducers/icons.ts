import {Icons} from '../@types/icons';
import { FetchIconsAction } from "../actions/icons";

interface State {
    icons?: Icons;
    isLoading: boolean;
    isLoaded: boolean;
    error?: Error;
};

export const icons = (state: State = { isLoading: false, isLoaded: false }, action: FetchIconsAction) => {
    switch (action.type) {
        case 'FETCH_ICONS_SUCCESS':
            return {...state, isLoading: false, isLoaded: true, error: null, icons: action.icons };
        case 'FETCH_ICONS_REQUEST':
            return { ...state, isLoading: true, isLoaded: false, error: null };
        case 'FETCH_ICONS_FAILURE':
            return {...state, isLoading: false, isLoaded: false, error: action.error };
        default: return { ...state };
    }
};

