import * as React from 'react';
import {Tag, TagDark, TagDelete, TagDeleteDark, TagsContainer, A} from '../styles';

interface TagsProps {
    tags: string[];
    dark?: boolean;
    onDelete?: (tag: string) => void;
}

export const Tags = ({tags, onDelete, dark }: TagsProps) => {
    
    const TagComponent = dark ? TagDark : Tag;
    const DeleteComponent = dark ? TagDeleteDark : TagDelete;

    return <TagsContainer>
        {tags.map((tag, i) => <TagComponent  key={`t-${i}-${tag}`}>
            <DeleteComponent onClick={onDelete ? () => onDelete(tag) : null} />
            <A to={'/tags/' + tag}>{tag}</A>
        </TagComponent>)}
    </TagsContainer>;
};