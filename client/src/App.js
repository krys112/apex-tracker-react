import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './components/Index';
import Profile from './components/Profile';

import { ContextController } from './context';

import './App.css';

const App = () => {
  return (
    <ContextController>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/profile/:platform/:gamertag" component={Profile} />
          </Switch>
        </>
      </Router>
    </ContextController>
  );
}

export default App;
