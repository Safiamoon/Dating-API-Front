import React from "react";
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import '../index.scss'
import Nav from "./Nav/Nav";
import LoginContainer from "./LoginService/LoginContainer";
import UserContext from "./Context/UserContext"
import AuthTogglerButton from "./Context/AuthTogglerButton"

class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleLogin = () =>{
      this.setState(state => ({
        LogedIn:true
      }));
    };
    this.state = {
      LogedIn: false,
      toggleLogin: this.toggleLogin,
    };
  }

  render = () => {
    return (
      <>
      <Nav />
      <UserContext.Provider value={this.state}><Content /></UserContext.Provider>
        <div className="container">
         <div className="title">Find your soulmate</div>
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
function Content() {
  return (
    <div>
      <AuthTogglerButton />
    </div>
  );
}
// ReactDOM.render(<App />, document.root);

export default App;