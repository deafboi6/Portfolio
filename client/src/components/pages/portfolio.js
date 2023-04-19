import React from 'react';
import WTW from "../images/WTW.png";
import newDND from "../images/newDND.png";

export default function Portfolio() {

    const cardStyles = {
        card: {
            width: "40%",
            color: "black",
        },
        image: {
            
        }
    };

    const projects = [
        {
            id: 0,
            name: "Movie Recommender",
            image: WTW,
            description: "A project where I worked with 3 other developers to create a small movie recommendation application for those struggling with something to watch",
            link: "https://hayni100.github.io/Movie-Recs/"
        },
        {
            id: 1,
            name: "newDND",
            image: newDND,
            description: "A turn-based web game that takes a logged-in user through a small dungeons using turn based logic, RNG, and allows for small fighting exchanges with monsters encountered in the dungeon",
            link: "https://new-dnd7.herokuapp.com/"
        },
    ];

    return (
        <div>
            {/* <h2 className="text-center pt-3 pb-3">Projects</h2> */}
            <div className="mx-auto row">
                {projects.map(project => (
                    <div className="card m-2" style={cardStyles.card} key={project.id}>
                    <img src={project.image} className="rounded" style={{width: "100%", marginTop: "3%"}} />
                        <div className="card-body d-flex flex-column justify-content-center" style={{paddingTop: "0%"}}>
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