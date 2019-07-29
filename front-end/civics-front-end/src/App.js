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
