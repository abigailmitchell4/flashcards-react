import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import App from './App';
import Home from './Home';
import NavBar from './NavBar';
import NoMatch from './NoMatch';
import { Container } from 'semantic-ui-react';

const Main = () => (
  <>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/app" component={ App } />
        <Route component={ NoMatch } />
      </Switch>
    </Container>
  </>
);

export default Main;