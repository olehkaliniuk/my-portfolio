import React, {useState} from 'react'
import "./Home.css"
import { TypeAnimation } from 'react-type-animation';

import css from "../../img/skills/css.png"
import html from "../../img/skills/html.png"
import js from "../../img/skills/js.png"
import nodejs from "../../img/skills/nodejs.png"
import php from "../../img/skills/php.png"
import react from "../../img/skills/react.png"

import "../../ i18n.js"
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

function Home() {

    const { t , i18n} = useTranslation();


    const [description, setDescription] = useState("");

    const skills = [
        { name: "CSS", img: css, desc: "Tailwind, SCSS, SASS, Bootstrap" },
        { name: "HTML", img: html, desc: "Semantic HTML, Adaptive Web Design" },
        { name: "JS", img: js, desc: "DOM Manipulation, Asynchronous Programming, Event Handling, API Integration, Version Control/Git, TypeScript" },
        { name: "NodeJS", img: nodejs, desc: "Expressб Mongoose, Axios, MySQL" },
        { name: "PHP", img: php, desc: "Laravel, WordPress, MySQL" },
        { name: "React", img: react, desc: "Redux, Axios, React Hooks, React Router" },
    ];


    return (
        <div className='homecontainer'>
            <div className='firstcont'>
            <h2>{t("h1")}</h2>
            <h1 className='animtext'>{t("h2")}<br />{t("h3")}</h1>
            <h4>
                <TypeAnimation className='runtext'
                key={i18n.language}
                    sequence={[
                        t("h4"),
                        1000,
                        t("h4"),
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block', }}
                    repeat={Infinity}
                />
            </h4>

            <NavLink to="/projects" className='gradient-button'>{t("h5")}</NavLink>
            </div>

            <div className='skillscontainer'>
                <div className='skillsdescription'>
                As a Full-Stack Developer, I have experience with the technologies listed below and continuously expand my knowledge by learning new tools and frameworks. I am always eager to improve my skills, stay updated with industry trends, and explore innovative solutions. My passion for development drives me to take on challenging projects and optimize performance across both front-end and back-end systems.  
                </div>
                <div className='skills'>
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="skill" 
                        onMouseEnter={() => setDescription(skill.desc)}
                        onClick={() => setDescription(skill.desc)}
                    >
                        <img src={skill.img} alt={skill.name} />
                        <div>{skill.name}</div>
                    </div>
                ))}

                    








                </div>
                <div className='sdesc'>{description}</div>
            </div>
        </div>
    )
}

export default Home
