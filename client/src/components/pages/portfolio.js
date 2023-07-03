import React from 'react';
import WTW from "../images/WTW.png";
import newDND from "../images/newDND.png";
import EmpTrak from "../images/EmpTrak.png";

export default function Portfolio() {

    const projects = [
        {
            id: 0,
            name: "Movie Recommender",
            image: WTW,
            description: "A project where I worked with 3 other developers to create a small movie recommendation application for those struggling with something to watch.",
            link: "https://hayni100.github.io/Movie-Recs/"
        },
        {
            id: 1,
            name: "newDND",
            image: newDND,
            description: "A turn-based web game that takes a logged-in user through a small dungeons using turn based logic, RNG, and allows for small fighting exchanges with monsters encountered in the dungeon.",
            link: "https://new-dnd7.herokuapp.com/"
        },
        {
            id: 2,
            name: "Employee Tracker Node Program",
            image: EmpTrak,
            description: "A Node-based program that allows you to track and edit employee data for a company through your own terminal.",
            link: "https://github.com/deafboi6/Employee-Tracker"
        }

    ];

    return (
        <div>
            <div className="mx-auto row cardContainer portfolio">
                {projects.map(project => (
                    <div className="card m-2" key={project.id}>
                    <img src={project.image} className="rounded" />
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h5 className="card-title text-center">{project.name}</h5>
                            <p className="card-text text-center">{project.description}</p>
                            <a href={project.link} target='_blank' className="btn btn-primary">Visit</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};