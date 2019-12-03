import React from "react";
import "./BurgerBar.css";

const BurgerBar = props => {

    return (
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <ul id="menu">
                    {React.Children.map(props.children,child => <li>{child}</li>)}
                </ul>
            </div>
        </nav>
    );
};


export default BurgerBar;