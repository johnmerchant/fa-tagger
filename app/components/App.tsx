import * as React from 'react';
import {Global, Container, Nav, NavLink, Header, Main, Footer, H1, P} from '../styles';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Startup} from './Startup';
import {Home} from './Home';
import {IconsPage} from './IconsPage';
import {Tags} from './Tags';
import {IconPage} from './IconPage';

export const App = () => 
    <React.Fragment>
        <Global />
        <Router>
            <Container>
                <Header>
                    <H1>fa-tagger</H1>
                </Header>
                <Nav>
                    <NavLink to="/icons">Icons</NavLink>
                    <NavLink to="/tags">Tags</NavLink>
                </Nav>
                <Main>
                    <Startup>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/icons" component={IconsPage}></Route>
                        <Route path="/icons/:iconId" render={(props) => <IconPage iconId={props.match.params.iconId} />}></Route>
                        <Route path="/tags" component={Tags}></Route>
                    </Startup>
                </Main>
                <Footer>
                    <P>by @_jmercha 2019</P>
                </Footer>
            </Container>
        </Router>
    </React.Fragment>; 