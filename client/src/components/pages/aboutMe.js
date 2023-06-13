import React from 'react';
import Picture from "../images/pfp.jpg";
import Clementine from "../images/Clementine.jpg";
import Mao from "../images/Mao.jpg";
import Nightmare from "../images/Nightmare.jpg";

export default function AboutMe() {
    return (
        <div>
            <div className='content'>
            <img src={Picture} className='rounded-circle' alt='Me and my wife'></img>
            <p>
                My name is Jayden Chapman, I live in Washington, where I've lived most of my life. Born in '99, I've always had a passion for technology. I graduated high school
                in 2017, and got my professional software development certification in early 2023. I'm excited to pursue my ideal career in software development and see where
                it takes me, both in my work enviroment and personal life! I'm getting married in October and have 3 cats that you can see below :) Feel free to check out my 
                work in the Projects tab, or visit my socials while you're here!
            </p>
            </div>
            <div className='images'>
                <img src={Clementine} alt='orange cat looking suspicious'></img>
                <img src={Nightmare} alt='black cat standing looking a little weird'></img>
                <img src={Mao} alt='Black and white cat staring into the camera'></img>
            </div>
        </div>
    )
};

