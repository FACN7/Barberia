import React from "react";
import "./buttons.css";


const hotShitButton = props => {
  return (
    <div className="hot-shit-button" >
        {props.children}
    </div>
  );
};

export {hotShitButton};