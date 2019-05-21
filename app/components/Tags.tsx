import * as React from 'react';
import {Tag, TagDelete, TagsContainer} from '../styles';

interface TagsProps {
    tags: string[],
    onDelete: (tag: string) => void;
};

export const Tags = ({tags, onDelete}: TagsProps) => 
    <TagsContainer>
    {tags.map((tag, i) => 
        <Tag key={`t-${i}-${tag}`}>
            <TagDelete onClick={() => onDelete(tag)} /> 
            {tag}
        </Tag>)}
</TagsContainer>;