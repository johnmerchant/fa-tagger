/** @jsx jsx */
import { jsx } from '@emotion/core';
import {Tag, TagDelete, TagsContainer, Link} from '../styles';

type TagsProps = {
    tags: string[];
    dark?: boolean;
    onDelete?: (tag: string) => void;
}

export const Tags = ({ tags, onDelete, dark }: TagsProps) => <TagsContainer>
    {tags.map((tag, i) => <Tag dark={dark} key={`t-${i}-${tag}`}>
        <TagDelete dark={dark} onClick={onDelete ? () => onDelete(tag) : null} />
        <Link to={'/tags/' + tag}>{tag}</Link>
    </Tag>)}
</TagsContainer>;