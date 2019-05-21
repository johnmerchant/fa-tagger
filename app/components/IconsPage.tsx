import * as React from 'react';
import {connect} from 'react-redux';
import { Icons as IconsData } from '../@types/icons';
import { IconTags } from '../@types/tags';
import { Input, Panel, Spinner, Centered} from '../styles';
import {State} from '../reducers';
import {Dispatch} from 'redux';
import {filterIcons} from '../actions/icons';
import {unsetTag} from '../actions/tags';
import { IconsGrid } from './IconsGrid';
import { DocumentTitle } from './DocumentTitle';

interface IconsState {
    icons?: IconsData;
    iconTags?: IconTags,
    filter?: string;
}

interface IconsDispatch {
    filterIcons(filter: string);
    onDeleteTag(iconName: string, tag: string);
}

type IconsProps = IconsState & IconsDispatch;

const IconsPageComponent = ({ icons, filterIcons, iconTags, onDeleteTag }: IconsProps) => {
    if (!icons) {
        return <Centered><Spinner /></Centered>;
    }
    return <DocumentTitle title="fa-tagger | Icons">
        <Panel>
            <Input type="search" placeholder="Search Icons and Tags ..." onChange={e => filterIcons(e.target.value)} />
            <IconsGrid icons={Object.keys(icons).map(key => icons[key])} iconTags={iconTags} onDeleteTag={onDeleteTag} />
        </Panel>
    </DocumentTitle>;
};

export const IconsPage = connect(
    ({icons}: State): IconsState => ({ 
        icons: icons.filtered || icons.icons,
        iconTags: icons.iconTags,
        filter: icons.filter
    }),
    (dispatch: Dispatch): IconsDispatch => ({ 
        filterIcons: (filter: string) => dispatch(filterIcons(filter)),
        onDeleteTag: (iconName: string, tag: string) => unsetTag()(dispatch)(iconName, tag)
    })
)(IconsPageComponent);