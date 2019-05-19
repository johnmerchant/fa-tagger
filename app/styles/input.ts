import styled from 'styled-components';
import * as colors from './colors';
import {fontFamily} from './typography';

export const Input = styled.input`
    font-family: ${fontFamily};
`;

export const Button = styled.button`
    font-family: ${fontFamily};
    color: ${colors.WHITE};
    background-color: ${colors.DARKER};
`;