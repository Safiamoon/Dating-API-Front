import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import './index.scss'
import Nav from "./Nav";

class App extends Component {
  render = () => {
    return (
      <>
        <Nav />
        <div className="container">
          <Router>
            <div>
              <Switch>
                {/* <Route path="/user/:id" component={UserPage} />
                <Route exact path="/" component={Users} />
                <Route component={NotFound} /> */}
              </Switch>
            </div>
          </Router>
        </div>
      </>
    );
  };
}

export default App;