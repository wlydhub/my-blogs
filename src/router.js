import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './pages/home/index';
import NoMatch from './pages/nomatch/index';

export default class JRouter extends React.Component {

  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </App>
      </Router>
    );
  }

}