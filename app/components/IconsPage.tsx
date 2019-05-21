import * as React from 'react';
import {connect} from 'react-redux';
import { Icons as IconsData } from '../@types/icons';
import { IconTags } from '../@types/tags';
import {Grid, GridCol, Input, Panel, Spinner} from '../styles';
import {State} from '../reducers';
import {Icon} from './Icon';
import {Dispatch} from 'redux';
import {filterIcons} from '../actions/icons';
import {unsetTag} from '../actions/tags';

interface IconsState {
    icons?: IconsData;
    iconTags?: IconTags,
    filter?: string;
}

interface IconsDispatch {
    filterIcons(filter: string);
    unsetTag(iconName: string, tag: string);
}

type IconsProps = IconsState & IconsDispatch;

const IconsPageComponent = ({ icons, filterIcons, iconTags, unsetTag }: IconsProps) => {
    if (!icons) {
        return <Spinner />;
    }
    return <Panel>
        <Input type="search" placeholder="Search Icons and Tags ..." onChange={e => filterIcons(e.target.value)} />
        <Grid>
            {Object.keys(icons)
                .map(key => ({ key, icon: icons[key] }))
                .map(icon => 
                    <GridCol key={icon.key}>
                        <Icon 
                            iconName={icon.key} 
                            iconData={icon.icon}
                            iconTags={iconTags[icon.key] || []} 
                            onDeleteTag={(tag) => unsetTag(icon.key, tag) } />
                    </GridCol>)
            }
        </Grid>
    </Panel>;
};

const mapStateToProps = ({ icons, tags }: State) => ({
    icons: icons ? icons.icons : null,
    tags: tags.iconTags
});

export const IconsPage = connect(
    (state: State): IconsState => ({ 
        icons: state.icons.filtered || state.icons.icons,
        filter: state.icons.filter,
        iconTags: state.tags.iconTags
    }),
    (dispatch: Dispatch): IconsDispatch => ({ 
        filterIcons: (filter: string) => dispatch(filterIcons(filter)),
        unsetTag: (iconName: string, tag: string) => unsetTag()(dispatch)(iconName, tag)
    })
)(IconsPageComponent);