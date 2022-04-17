import React from "react";
import NavBar from "./NavBar";
import {BrowserRouter as Router, Routes, Switch } from "react-router-dom";



export default function Routes(){
    

    return(
        <Router>
            <div className="Routes-Nav">
                <NavBar />
            </div>
            <div className="Routes-Main">
                <Home />
            </div>
        </Router>
    )
}