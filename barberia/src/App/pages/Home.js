import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routes } from "../App";
import { A } from "hookrouter";

const Home = () => {
  return (
    <div className="App">
      <h1>Project Home</h1>
      <A href='/list'>List</A>
      <A href='/calendar'>Calendar</A>
      <A href='/landing'>Landing</A>
    </div>

  );
}

export default Home;
