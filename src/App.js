import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';
import Signout from './Signout';

import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
import Album from './album/Album';
import Expense from './dashboard/Expense';

class App extends React.Component {
  constructor() {
    super()
    Amplify.configure(awsconfig);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/album">
            <Album></Album>
          </Route>
          <Route path="/signout">
            <Signout></Signout>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    );
  } 
}

export default withAuthenticator(App)
