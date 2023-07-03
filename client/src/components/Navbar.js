import React from "react";
import { Link } from "react-router-dom";
import LinkedInPic from "../components/images/linkedIn.png";
import GithubPic from "../components/images/github.png";

export default function Navbar() {
    const gitUser = "https://github.com/deafboi6";
    const linkedIn = "https://www.linkedin.com/in/jay-chapman6/";

    return (
        <nav className="navbar navThing">
            <p>Jayden Chapman</p>
                <ul className="navbar-nav">
                    <li className="dropdown">
                        <span><a href="#">Socials</a></span>
                        <div className="dropdown-content">
                            <a href="https://bold.pro/my/jayden-chapman6" target="_blank" className="navItem">Résumé</a>
                            <a href={gitUser} target="_blank"><img src={GithubPic} />Github</a>
                            <a href={linkedIn} target="_blank"><img src={LinkedInPic} />LinkedIn</a>
                        </div>
                    </li>
                    <li>
                        <Link to="/" className="navItem">About Me</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="navItem">Projects</Link>
                    </li>
                </ul>
        </nav>
    );
};
