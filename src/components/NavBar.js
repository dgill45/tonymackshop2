import React from "react";

//get fontawesome imports
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar(){

    return(
        <div className="Routes-Nav">
            <header className="header">
                <div className="nav-logo">
                    <h3>MobileCutz</h3>

                </div>
                <div className="nav-toggle">
                    <FontAwesomeIcon icon={faBars} className = "header-button"/>

                </div>

            </header>

        </div>
    )
}