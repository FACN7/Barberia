import React from "react";
import { HotShitButton, YellowButton } from "../components/buttons";
import "../App.css";
import "./Home.css";
import { A } from "hookrouter";
const Home = () => {
  return (
    <div className="App">
      <div className="barberia-name">
        <h3>HOSAM'S BARBERIA</h3>
      </div>
      <HotShitButton
        href="/calendar"
        title="40 shekel"
        description="Quick Haircut Booking"
      />

      <a href="/services">
        <input type="button" className="pick_service" value="pick a service" />
      </a>

      <footer>
        <div className="location-button">
          <a href="https://goo.gl/maps/cZ7B3m6ev6H9xTEt8">
            <img src="https://img.icons8.com/pastel-glyph/64/000000/place-marker.png" />{" "}
            NAZARETH, EL-EIN
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
