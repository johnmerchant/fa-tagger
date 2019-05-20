import * as React from 'react';
import {connect} from 'react-redux';
import { Icons as IconsData } from '../@types/icons';
import {Grid, GridCol, Input, Panel, Spinner} from '../styles';
import {State} from '../reducers';
import {Icon} from './Icon';
import { Dispatch } from 'redux';
import {filterIcons} from '../actions/icons';

interface IconsState {
    icons?: IconsData;
    filter?: string;
}

interface IconsDispatch {
    filterIcons(filter: string);
}

type IconsProps = IconsState & IconsDispatch;

const IconsComponent = ({ icons, filterIcons }: IconsProps) => {
    if (!icons) {
        return <Spinner />;
    }
    return <Panel>
        <Input type="search" placeholder="Search Icons and Tags ..." onChange={e => filterIcons(e.target.value)} />
        <Grid>
            {Object.keys(icons)
                .map(key => ({ key, icon: icons[key] }))
                .map(icon => <GridCol key={icon.key}><Icon iconName={icon.key} iconData={icon.icon} /></GridCol>)}
        </Grid>
    </Panel>;
};

const mapStateToProps = ({ icons, tags }: State) => ({
    icons: icons ? icons.icons : null
});

export const Icons = connect(
    (state: State): IconsState => ({ 
        icons: state.icons.filtered || state.icons.icons,
        filter: state.icons.filter
    }),
    (dispatch: Dispatch): IconsDispatch => ({ 
        filterIcons: (filter: string) => dispatch(filterIcons(filter))
    })
)(IconsComponent);