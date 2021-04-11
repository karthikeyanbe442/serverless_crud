import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {languages:[], alphabets:[]}
    this.alphabetsConfig = {};
    this.user = null
  } 

  async componentDidMount(){
    this.user = await Auth.currentAuthenticatedUser();
    if(this.alphabetsConfig){
      const response = await fetch("alphabet-config.json");
      const jsonResponse = await response.json();
      this.alphabetsConfig = jsonResponse;
      this.setState({languages:this.alphabetsConfig.SUPPORTED_LANGUAGES});
    }
    await this.setLanguage(this.state.languages[0]);
  }

  async setLanguage(language) {
    this.setState({alphabets:this.alphabetsConfig.ALPHABETS[language]});
  }
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
    </Router>
    );
  } 
}

export default withAuthenticator(App)
