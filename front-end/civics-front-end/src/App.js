import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Login from "./components/Login"
import Test from "./components/Test"
import Mastery from './components/Mastery'
import Navbar from "./components/Navbar"
import Register from './components/Register'
import Study from './components/Study'

import './App.css';

class App extends Component{
  state={
    user: {
      name: "Marko", 
      loggedIn: false, 
      stats: "95"
    }
  }
  render(){
    
    return (
        <BrowserRouter>
          <div className="App">
            <Route path="/" render={() => <Navbar user={this.state.user} />} />
            <Switch >
            <Route path="/login" component={Login} />
            <Route path="/register" render={(props)=> <Register {...props} /> } />
            <Route path="/mastery" component={Mastery} />
            <Route path="/test" component={Test} />
            <Route path="/study" component={Study} />
            </Switch>
          </div>
        </BrowserRouter>
  );
}
}

export default App;
