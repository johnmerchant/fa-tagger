import * as React from 'react';
import {connect} from 'react-redux';
import { Icons as IconsData } from '../@types/icons';
import { Tags as TagsData } from '../@types/tags';
import {Grid, GridCol} from '../styles';
import {Spinner} from '../styles';
import {State} from '../reducers';
import {Icon} from './Icon';

interface IconsState {
    icons?: IconsData;
}

type IconsProps = IconsState;

const IconsComponent = ({ icons }: IconsProps) => {
    if (!icons) {
        return <Spinner />;
    }
    return <Grid>
        {Object.keys(icons)
            .map(key => ({ key, icon: icons[key] }))
            .map(icon => <GridCol key={icon.key}><Icon iconName={icon.key} iconData={icon.icon} /></GridCol>)}
    </Grid>
};

const mapStateToProps = ({ icons, tags }: State) => ({
    icons: icons ? icons.icons : null
});

export const Icons = connect(
    (state: State) => ({ icons: state.icons.icons })
)(IconsComponent);