import styled from '@emotion/styled';
import { WHITE, DARKEST } from './colors';
import { fontFamily } from './typography';

type Dark = { dark: boolean };

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
`;

export const TagDelete = styled.button<Dark>(({dark}) => `
    background-color: ${dark ? DARKEST : WHITE};
    color: ${dark ? WHITE : DARKEST};
    border: none;
    background: 0;
    padding: 2px 2px;
    font-size: 14px;
    :hover {
        cursor: pointer;
    }
    &:after {
        font-size: 8pt;
        content: "\\00d7";
    }
`);

export const Tag = styled.div<Dark>(({dark}) => `
    display: flex;
    font-family: ${fontFamily};
    color: ${dark? WHITE : DARKEST};
    background-color: ${dark ? DARKEST : WHITE};
    margin: 2px;
    padding: 2px 8px;
    border-radius: 4px;
`);