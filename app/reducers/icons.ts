import {Icons} from '../@types/icons';
import { IconsAction } from "../actions/icons";

interface State {
    filter?: string;
    filtered?: Icons;
    icons?: Icons;
    isLoading: boolean;
    isLoaded: boolean;
    error?: Error;
};

export const icons = (state: State = { isLoading: false, isLoaded: false }, action: IconsAction) => {
    switch (action.type) {
        case 'FETCH_ICONS_SUCCESS':
            return {...state, isLoading: false, isLoaded: true, error: null, icons: action.icons };
        case 'FETCH_ICONS_REQUEST':
            return { ...state, isLoading: true, isLoaded: false, error: null };
        case 'FETCH_ICONS_FAILURE':
            return {...state, isLoading: false, isLoaded: false, error: action.error };
        case 'FILTER_ICONS':
            console.log(state);
            if (state.icons && action.filter) {
                let filtered = {...state.icons};
                let expr = new RegExp(state.filter, 'gi');
                for (const key in filtered) {
                    const icon = filtered[key];
                    const match = expr.test(key) 
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

