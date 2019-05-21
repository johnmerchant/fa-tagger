import * as React from 'react';
import { Panel, H3, Centered, Spinner } from "../styles";
import { connect } from "react-redux";
import { Icons } from '../@types/icons';
import { State } from '../reducers';
import { Dispatch } from 'redux';

interface IconPageArgs {
    iconId: string;
}

interface IconPageState {
    icons?: Icons;
}

interface IconPageDispatch {

}

type IconPageProps = IconPageArgs & IconPageState & IconPageDispatch;

const IconPageComponent = ({ iconId, icons }: IconPageProps) => {
    if (!icons) {
        return <Centered><Spinner></Spinner></Centered>;
    }
    console.log(iconId);
    const icon = icons[iconId];
    console.log(icons);
    console.log(icon[iconId]);
    return <Panel>
        <H3>{icon.label}</H3>
    </Panel>;
};

export const IconPage = connect(
    (state: State) => ({ icons: state.icons.icons }),
    (disaptch: Dispatch) => ({ }),
)(IconPageComponent);