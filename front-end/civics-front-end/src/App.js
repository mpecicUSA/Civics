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
      loggedIn: true, 
      stats: "95"
    }
  }
  async componentDidMount(){
    console.log('component did mount')
    const questionsR = await fetch("http://localhost:8000/questions");
    const q2 = await questionsR.json()
    this.setState({questions: q2})
}  

 
  render(){
    if(this.state.questions){

      return (
        <BrowserRouter>
          <div className="App">
            <Route path="/" render={() => <Navbar user={this.state.user} />} />
            <Switch >
            <Route path="/login" component={Login} />
            <Route path="/register" render={(props)=> <Register {...props} /> } />
            <Route path="/mastery" component={Mastery} />
            <Route path="/test" component={Test} />
            <Route path="/study" render={(props) => <Study questions={this.state.questions} user={this.state.user} {...props} />} />
            </Switch>
          </div>
        </BrowserRouter>
  );
}
  else{
    return (
      <h1>loading</h1> 
    )
  }
}
}

export default App;


// TODO new tab for logged in users to add questions 
