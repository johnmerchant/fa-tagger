import { useEffect } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../reducers';
import { Icons } from '../@types/icons';
import { fetchIcons } from '../actions/icons';
import { getTags } from '../actions/tags';
import { ThunkDispatch } from 'redux-thunk';
import {Spinner} from '../styles';

interface StartupDispatch {
    fetchIcons(): void;
    getTags(): void;
}

interface StartupState {
    icons: Icons;
    isLoading: boolean;
    isLoaded: boolean;
}

type StartupProps = StartupDispatch & StartupState & { children: React.ReactNode };

const StartupComponent = ({ children, fetchIcons, getTags, icons, isLoading, isLoaded }: StartupProps) => {
    useEffect(() =>{ 
        if (!isLoading && !isLoaded && !icons) fetchIcons();
        getTags();
    });
    return <React.Fragment>{isLoading ? <Spinner/> : children}</React.Fragment>;
};

const mapStateToProps = (state: State): StartupState => ({
     icons: state.icons.icons,
     isLoading: state.icons.isLoading,
     isLoaded: state.icons.isLoaded
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchIcons: () => dispatch(fetchIcons()),
    getTags: () => dispatch(getTags())
});

export const Startup = connect(mapStateToProps, mapDispatchToProps)(StartupComponent);

