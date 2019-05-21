import * as React from 'react';
import { connect } from 'react-redux';
import { DocumentTitle } from "./DocumentTitle";
import { H2, Input, Panel, Label, InputGroup, Centered, Spinner, H3 } from '../styles';
import { Tags, IconTags } from '../@types/tags';
import { State } from '../reducers';
import { Dispatch } from 'redux';
import { setTagDescription, unsetTag } from '../actions/tags';
import { IconsGrid } from './IconsGrid';
import { Icons } from '../@types/icons';

interface TagState {
    tags?: Tags;
    icons?: Icons;
    iconTags?: IconTags;
}

interface TagDispatch {
    onDescriptionChanged(tag: string, description: string): void;
    onDeleteTag(tag: string, icon: string): void;
}

interface TagArgs {
    tag: string;
}

type TagProps = TagState & TagDispatch & TagArgs;

const TagPageComponent = ({ tag, tags, icons, iconTags, onDescriptionChanged, onDeleteTag }: TagProps) => {
    if (!tags) {
        return <DocumentTitle title={'ta-tagger | Loading ...'}><Centered><Spinner /></Centered></DocumentTitle>
    }
    return <DocumentTitle title={'ta-tagger | ' + tag}>
        <Panel>
            <H2>{tag}</H2>
            <InputGroup>
                <Label>Description</Label>
                <Input
                    type="text"
                    placeholder="Enter a tag description ..." 
                    value={tags[tag].description}
                    onChange={(e) => onDescriptionChanged(tag, e.target.value)} />
            </InputGroup>
            <H3>Icons with Tag</H3>
            <IconsGrid icons={tags[tag].icons.map(i => icons[i])} iconTags={iconTags} onDeleteTag={onDeleteTag} />
        </Panel>
    </DocumentTitle>
}

export const TagPage = connect(
    (state: State) => ({ 
        tags: state.tags.tags,
        icons: state.icons.icons,
        iconTags: state.icons.iconTags
    }),
    (dispatch: Dispatch) => ({
        onDescriptionChanged: (tag: string, description: string) => setTagDescription()(dispatch)(tag, description),
        onDeleteTag: (icon: string, tag: string) => unsetTag()(dispatch)(icon, tag)
    })
)(TagPageComponent);