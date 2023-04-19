import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "../styles/Navbar.Styled";

export default function Navbar() {
    // forced styles due to React links fighting css-applied styling
    const navStyles = {
        textDecoration: "none",
        color: "white"
    };

    return (
            <div>
            <ul className="navbar-nav">
                <StyledNav>
                    <Link to="/" style={navStyles}>About Me</Link>
                </StyledNav>
                <StyledNav>
                    <Link to="/portfolio" style={navStyles}>Projects</Link>
                </StyledNav>
                <StyledNav>
                    <Link to="/resume" style={navStyles}>Résumé</Link>
                </StyledNav>
                <StyledNav>
                    <Link to="/contactMe" style={navStyles}>Contact Me!</Link>
                </StyledNav>
            </ul>
        </div>
    );
};
