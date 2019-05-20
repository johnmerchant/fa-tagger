import * as React from 'react';

interface TagsProps {
    tags: string[],
    onDelete?: (tag: string) => void;
};

export const Tags = ({tags, onDelete}: TagsProps) => <span>
    {tags.map(tag => <span>{tag}</span>)}
</span>;