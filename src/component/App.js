import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import '../index.scss'
import Nav from "./Nav";
import Login from "./LoginService/Login";

class App extends Component {
  render = () => {
    return (
      <>
        <Nav />
        <div className="container">
          <Router>
            <div>
              <Switch>
                 <Route path="/login" component={Login} />
              </Switch>
            </div>
          </Router>
        </div>
      </>
    );
  };
}

export default App;