import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Calendar from "./pages/Calendar";
import logo from "../logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/calendar" component={Calendar} />
      </Switch>
    </div>
  );
}

export default App;
