import React from "react";
import { HotShitButton, YellowButton } from "../components/buttons";
import "../App.css"
const Home = () => {
  return (
    <div className="App">
      <div className="barberia-name"><h3>HOSAM'S BARBERIA</h3></div>
      <HotShitButton href='/calendar'><h3>40 shekel</h3><p>Quick Haircut<br />Booking</p></HotShitButton>

    </div>
  );
}

export default Home;
