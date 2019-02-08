import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

// COMPONENTS
import Header from './Header'

// CONTAINERS
import Home from '../containers/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          
          <nav className="navbar navbar-expand-md bg-info navbar-dark">
            <a className="navbar-brand" href=""> Wiki App </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
              </ul>
            </div> 
          </nav>
          <Header/>
          <br/><br/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
