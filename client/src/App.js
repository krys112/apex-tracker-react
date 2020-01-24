import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './components/Index';
import Profile from './components/Profile';

import { Provider } from './context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/profile/:platform/:gamertag" component={Profile} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
