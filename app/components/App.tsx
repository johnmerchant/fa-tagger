import * as React from 'react';
import {Container, Nav, NavLink, Header, Main, Footer, H1, P} from '../styles';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Startup} from './Startup';
import {Home} from './Home';
import {Icons} from './Icons';
import {Tags} from './Tags';

export const App = () => 
    <Router>
        <Container>
            <Header>
                <H1>fa-tagger></H1>
            </Header>
            <Nav>
                <NavLink to="/icons">Icons</NavLink>
                <NavLink to="/tags">Tags</NavLink>
            </Nav>
            <Main>
                <Startup>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/icons" component={Icons}></Route>
                    <Route path="/tags" component={Tags}></Route>
                </Startup>
            </Main>
            <Footer>
                <P>by @_jmercha 2019</P>
            </Footer>
        </Container>
    </Router>; 