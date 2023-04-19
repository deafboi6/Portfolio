import React from "react";
import Github from "./images/github.png";
import LinkedIn from "./images/linkedIn.png";

export default function Footer () {
    const gitUser = "https://github.com/deafboi6";
    const linkedIn = "https://www.linkedin.com/in/jay-chapman6/";

    const styles = {
        width: "4.2%",
        git: {
            width: "4.2%",
            marginLeft: "45.8%"
        }
    };

    return (
        <div className="">
            <a href={gitUser} target="_blank"><img src={Github} style={styles.git} className="rounded-circle"></img></a>
            <a href={linkedIn} target="_blank"><img src={LinkedIn} style={styles} className="rounded-circle"></img></a>
        </div>
    )
};