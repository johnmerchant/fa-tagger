/** @jsx jsx */
import { jsx } from '@emotion/core';
import GithubCorner from 'react-github-corner';
import {Global, Container, Nav, NavLink, Header, Main, Footer, H1, P} from '../styles';
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
        <GithubCorner href="https://github.com/jmercha/fa-tagger" size={100} />
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
                    <P>Constructed with Coolness by <a href="https://jmercha.dev/">John Merchant</a></P>
                </Footer>
            </Container>
        </Router>
    </DocumentTitle>; 