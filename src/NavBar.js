import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <nav>
            <p className="icon"><FontAwesomeIcon icon={faEarthAsia} /> My travel journey</p>
        </nav>
    );
};

export default NavBar;
