import React from "react";
import { HotShitButton, YellowButton } from "../components/buttons";
import "../App.css"
import "./Home.css"
const Home = () => {
  return (
    <div className="App">
      <div className="barberia-name"><h3>HOSAM'S BARBERIA</h3></div>
      <HotShitButton href='/calendar' title="40 shekel" description="Quick Haircut Booking" />

    </div>
  );
}

export default Home;
