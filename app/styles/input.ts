import styled from 'styled-components';
import * as colors from './colors';
import {fontFamily} from './typography';

export const Input = styled.input`
    font-family: ${fontFamily};
    padding: 14px;
    border: none;
    border-radius: 8px;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.button`
    font-family: ${fontFamily};
    color: ${colors.WHITE};
    background-color: ${colors.DARKER};
    border: none;
    border-radius: 4px;
    padding: 4px 8px;

    &:hover {
        cursor: pointer;
        filter: brightness(120%);
    }
`;

export const Label = styled.label`
    font-family: ${fontFamily}; 
    font-weight: 550;
    padding-right: 24px;
`;