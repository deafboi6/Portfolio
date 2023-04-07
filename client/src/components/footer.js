import React from "react";
import Github from "./images/github.png";
import LinkedIn from "./images/linkedIn.png";

export default function Footer () {
    const gitUser = "https://github.com/deafboi6";
    const linkedIn = "https://www.linkedin.com/in/jay-chapman6/";

    return (
        <div>
            <a href={gitUser} target="_blank"><img src={Github} style={{width: "4%"}} className="rounded-circle"></img></a>
            <a href={linkedIn} target="_blank"><img src={LinkedIn} style={{width: "4%"}} className="rounded-circle"></img></a>
        </div>
    )
};