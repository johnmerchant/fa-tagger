/** @jsx jsx */
import { jsx } from '@emotion/core';
import {P} from '../styles';
import {NavLink} from 'react-router-dom';

export const Home = () => <P>
    Welcome to fa-tagger. Get started by browsing <NavLink to="/icons">Icons</NavLink> or viewing your <NavLink to="/tags">Tags</NavLink>.
</P>;