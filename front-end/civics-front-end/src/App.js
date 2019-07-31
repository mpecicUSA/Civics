import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Login from "./Layout/Login"
import Test from "./Layout/Test"
import Mastery from './Layout/Mastery'
import Navbar from "./Layout/Navbar"
import Register from './Layout/Register'
import Study from './Layout/Study'
import Home from './Layout/Home'

import './App.css';

class App extends Component{
  state={
    user: {
      name: '', 
      loggedIn: false, 
      mastery: undefined
    }
  }



  _updateUserState = (user, stats) => {
    let attempts = 1; 
    let right = 1;
    for(let each in stats){
      attempts += stats[each].attempts
      right += stats[each].stats_right
    }
    let mastery = (right/attempts)*100
    this.setState({
      user: {
        name : user.first_name,
        loggedIn: true, 
        mastery: mastery
      }
  })
}
  render(){

      return (
        <BrowserRouter>
          <div className="App">
            <Route path="/" render={() => <Navbar user={this.state.user} />} />
            <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/login" render={(props)=> <Login updateState={this._updateUserState} {...props} /> } />
            <Route path="/register" render={(props)=> <Register {...props} /> } />
            <Route path="/mastery" component={Mastery} />
            <Route path="/test" component={Test} />
            <Route path="/study" render={(props) => <Study user={this.state.user} stats={this.state.state} {...props} />} />
            </Switch>
          </div>
        </BrowserRouter>
  );
}
}

export default App;


// TODO new tab for logged in users to add questions 
