import styled from 'styled-components';
import * as colors from './colors';
import { Link } from 'react-router-dom';

export const fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"

export const H1 = styled.h1`
    font-family: ${fontFamily};
`;

export const H2 = styled.h2`
    font-family: ${fontFamily};
    color: ${colors.DARKER};
`;

export const H3 = styled.h3`
    font-family: ${fontFamily};
    color: ${colors.DARKEST};
    text-align: center;
`;

export const H4 = styled.h4`
    font-family: ${fontFamily};
`;

export const P = styled.p`
    font-family: ${fontFamily};
    text-align: center;
`;

export const A = styled(Link)`
    text-decoration: none;
    color: inherit;
`;