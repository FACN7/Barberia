import React from "react";
import "./BurgerBar.css";

const BurgerBar = props => {

    return (
        <div className="burger-bar">
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>


                    <ul id="menu">
                        {React.Children.map(props.children,(item)=>{
                        return <li>{item}</li>
                        })}
                    </ul>
                </div>
            </nav>

        </div>
    );
};


export { BurgerBar };