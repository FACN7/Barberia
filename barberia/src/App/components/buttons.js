import React from "react";
import "./buttons.css";

import { A } from "hookrouter";



const HotShitButton = props => {
  return (
    <div className="hot-shit-button" >
      <A href={props.href}>
        <div className="button-body">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </A>
    </div>
  );
};

const YellowButton = props => {
  return (

    <div className="yellow-button" >
      <A href={props.href}>
        <div className="button-body">
          {props.children}
        </div>
      </A>

    </div>
  );
};


export { HotShitButton, YellowButton };