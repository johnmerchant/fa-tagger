
import {NavLink as RouterNavLink} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import {fontFamily} from './typography';
import * as colors from './colors';

export const Global = createGlobalStyle`
    body {
        background-color: ${colors.WHITE};
    }
`;

export const Container = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    background-color: ${colors.WHITE};
    grid-template-rows: 100px 100px auto 100px;
    grid-template-areas: 
        'header'
        'nav'
        'main'
        'footer';
`;

export const Header = styled.header`
    grid-area: header;
    justify-content: center;
    align-content: center;
    display: flex;
    color: ${colors.WHITE};
    background-color: ${colors.DARKEST};
`;

export const Nav = styled.nav`
    grid-area: nav;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const NavLink = styled(RouterNavLink)`
    font-family: ${fontFamily};
    color: ${colors.LIGHT};
    text-decoration: none;
    font-size: 24px;

    &.active {
        color: ${colors.DARKER};
    }

    :hover {
        color: ${colors.LIGHTER};
    }
`;

export const Main = styled.main`
    grid-area: main;
    display: flex;
    justify-content: center;
    margin-left: 40px;
    margin-right: 40px;
`;

export const Centered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.footer`
    grid-area: footer;
    text-align: center;
`;