import * as React from 'react';
import { connect } from "react-redux";
import {DocumentTitle} from './DocumentTitle'; 
import { Tags as TagsData } from '../@types/tags';
import { Panel, H2, Centered, Spinner } from '../styles';
import { Tags as TagsComponent } from './tags';
import { State } from '../reducers';
import { deleteTag } from '../actions/tags';
import { Dispatch } from 'redux';

interface TagsState {
    tags?: TagsData;
}

interface TagsDispatch {
    onDelete(tag: string): void;
}

type TagsProps = TagsState & TagsDispatch;

const TagsPageComponent = ({tags, onDelete}: TagsProps) => {
    if (!tags) {
        return <Centered><Spinner /></Centered>
    }
    return <DocumentTitle title="fa-tagger | Tags">
        <Panel>
            <H2>Tags</H2>
            <TagsComponent dark tags={Object.keys(tags)} onDelete={onDelete} ></TagsComponent>
        </Panel>
    </DocumentTitle>;
}

export const TagsPage = connect(
    (state: State) => ({ tags: state.tags.tags }),
    (dispatch: Dispatch) => ({
        onDelete: (tag: string) => deleteTag()(dispatch)(tag)
    })
)(TagsPageComponent);