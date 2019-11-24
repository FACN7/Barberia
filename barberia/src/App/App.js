import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home'; //pages to be routed to
import List from './pages/List'; //pages to be routed to
import logo from '../logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/list' component={List} />
      </Switch>













      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
