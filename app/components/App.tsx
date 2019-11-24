import * as React from 'react';
import {A, Global, Container, Nav, NavLink, Header, Main, Footer, H1, P} from '../styles';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Startup} from './Startup';
import {Home} from './Home';
import {IconsPage} from './IconsPage';
import {IconPage} from './IconPage';
import {DocumentTitle} from './DocumentTitle';
import {TagPage} from './TagPage';
import {TagsPage} from './TagsPage';

export const App = () => 
    <DocumentTitle title="fa-tagger">
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
                        <Route exact path="/icons/:iconId" render={(props) => <IconPage iconId={props.match.params.iconId} />}></Route>
                        <Route exact path="/tags" component={TagsPage}></Route>
                        <Route exact path="/tags/:tag" render={(props) => <TagPage tag={props.match.params.tag} />}></Route>
                    </Startup>
                </Main>
                <Footer>
                    <P>Constructed with Coolness by <A to="https://jmercha.dev/">John Merchant</A></P>
                </Footer>
            </Container>
        </Router>
    </DocumentTitle>; 