import styled from 'styled-components';
import { WHITE } from './colors';
import { fontFamily } from './typography';

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
`;

export const TagDelete = styled.button`
    border: none;
    background: 0;
    padding: 2px 4px;

    :hover {
        cursor: pointer;
    }

    &:after {
        size: 8pt;
        content: "\00d7";
    }
`;

export const Tag = styled.div`
    display: flex;
    font-family: ${fontFamily};
    background-color: ${WHITE};
    margin: 2px;
    padding: 2px;
    border-radius: 4px;
`;