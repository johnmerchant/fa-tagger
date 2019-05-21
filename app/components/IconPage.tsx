import * as React from 'react';
import { Panel, H2, Centered, Spinner, colors } from "../styles";
import { connect } from "react-redux";
import { Icons } from '../@types/icons';
import { State } from '../reducers';
import { Dispatch } from 'redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { TagsInput } from './TagsInput';
import { setTag, unsetTag } from '../actions/tags';
import { IconTags, Tags } from '../@types/tags';
import { DocumentTitle } from './DocumentTitle';

interface IconPageArgs {
    iconId: string;
}

interface IconPageState {
    icons?: Icons;
    iconTags?: IconTags;
    availableTags?: string[];
}

interface IconPageDispatch {
    addTag(tag: string, icon: string): void;
    deleteTag(icon: string, tag: string): void;
}

type IconPageProps = IconPageArgs & IconPageState & IconPageDispatch;

const IconPageComponent = ({ iconId, availableTags, icons, iconTags, addTag, deleteTag }: IconPageProps) => {
    if (!icons) {
        return <DocumentTitle title="fa-tagger | Loading ..."><Centered><Spinner /></Centered></DocumentTitle>;
    }
    
    const icon = icons[iconId];
    const selectedTags = (iconTags ? iconTags[iconId] : []) || [];

    return <DocumentTitle title={"fa-tagger | " + icon.label}> 
            <Panel>
                <H2>{icon.label}</H2>
                <FontAwesomeIcon icon={iconId as IconName} size="10x" color={colors.LIGHTER} />
                <TagsInput 
                    tags={selectedTags}
                    availableTags={availableTags}
                    onAdd={(tag) => addTag(tag, iconId)}
                    onDelete={(tag) => deleteTag(iconId, tag)} />
            </Panel>
        </DocumentTitle>;
};

export const IconPage = connect(
    (state: State) => ({ 
        icons: state.icons.icons,
        iconTags: state.icons.iconTags,
        availableTags: Object.keys(state.tags.tags || {})
     }),
    (dispatch: Dispatch) => ({
        addTag: setTag()(dispatch),
        deleteTag: unsetTag()(dispatch)
     }),
)(IconPageComponent);