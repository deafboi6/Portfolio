import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h2><span className="navbar-text text-light font-weight-bold mr-auto">Jayden Chapman</span></h2>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to = "/">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/portfolio">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/resume">Résumé</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/contactMe">Contact Me!</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;