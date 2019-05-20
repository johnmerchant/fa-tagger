import styled from 'styled-components';
import * as colors from './colors';
import {fontFamily} from './typography';

export const Input = styled.input`
    font-family: ${fontFamily};
    padding: 14px;
    border: none;
    border-radius: 8px;
`;

export const Button = styled.button`
    font-family: ${fontFamily};
    color: ${colors.WHITE};
    background-color: ${colors.DARKER};
`;