import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import '../index.scss'
import Nav from "./Nav";
import LoginContainer from "./LoginService/LoginContainer";


class App extends Component {
  render = () => {
    return (
      <>
        <Nav />
        <div className="container">
         <div className="title">Find your soulmate !</div>
          <Router>
            <div>
              <Switch>
                 <Route path="/login" component={LoginContainer} />          
              </Switch>
            </div>
          </Router>
        </div>
      </>
    );
  };
}

export default App;