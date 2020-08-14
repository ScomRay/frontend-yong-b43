import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Feed from './views/FeedView'
import Login from './views/LoginView'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/feed" component={Feed} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
