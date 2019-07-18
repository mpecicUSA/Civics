import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

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

      <div className="App">
      <Router>
        <Route path="/" render={() => <Navbar user={this.state.user} />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/mastery" component={Mastery} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/study" component={Study} />
      </Router>
    </div>

  );
}
}

export default App;
