import React, { useState, useEffect, useRef } from 'react';
import "./Home.css";
import { TypeAnimation } from 'react-type-animation';

import css from "../../img/skills/css.png";
import html from "../../img/skills/html.png";
import js from "../../img/skills/js.png";
import nodejs from "../../img/skills/nodejs.png";
import php from "../../img/skills/php.png";
import react from "../../img/skills/react.png";

import "../../ i18n.js";
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

function Home() {
    const { t, i18n } = useTranslation();
    const [selectedSkill, setSelectedSkill] = useState({
        name: "NodeJS",
        img: nodejs,
        desc: "Express, Mongoose, Axios, MySQL"
    });

    const skills = [
        { name: "CSS", img: css, desc: "Tailwind, SCSS, SASS, Bootstrap" },
        { name: "HTML", img: html, desc: "Semantic HTML, Adaptive Web Design" },
        { name: "JS", img: js, desc: "DOM Manipulation, Asynchronous Programming, Event Handling, API Integration, Version Control/Git, TypeScript" },
        { name: "NodeJS", img: nodejs, desc: "Express, Mongoose, Axios, MySQL" },
        { name: "PHP", img: php, desc: "Laravel, WordPress, MySQL" },
        { name: "React", img: react, desc: "Redux, Axios, React Hooks, React Router" },
    ];

    // Refs для отслеживания видимости
    const firstContRef = useRef(null);
    const skillsContainerRef = useRef(null);

    // State для управления прозрачностью
    const [firstContVisible, setFirstContVisible] = useState(false);
    const [skillsContainerVisible, setSkillsContainerVisible] = useState(false);

    useEffect(() => {
        const observerOptions = { threshold: 0.3 }; // 30% элемента должно быть видно

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                console.log(`Объект: ${entry.target.className}, Видим: ${entry.isIntersecting}`);

                if (entry.target === firstContRef.current) {
                    setFirstContVisible(entry.isIntersecting);
                }
                if (entry.target === skillsContainerRef.current) {
                    setSkillsContainerVisible(entry.isIntersecting);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (firstContRef.current) observer.observe(firstContRef.current);
        if (skillsContainerRef.current) observer.observe(skillsContainerRef.current);

        return () => {
            if (firstContRef.current) observer.unobserve(firstContRef.current);
            if (skillsContainerRef.current) observer.unobserve(skillsContainerRef.current);
        };
    }, []);

    return (
        <div className='homecontainer'>
            <div 
                ref={firstContRef} 
                className={`firstcont ${firstContVisible ? "visible" : ""}`}
            >
                <h2>{t("h1")}</h2>
                <h1 className='animtext'>{t("h2")}<br />{t("h3")}</h1>
                <h4>
                    <TypeAnimation 
                        className='runtext'
                        key={i18n.language}
                        sequence={[
                            t("h4"),
                            1000,
                            t("h4"),
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h4>
                <div><NavLink to="/projects" className='gradient-button'>{t("h5")}</NavLink></div>
                
            </div>

            <div 
                ref={skillsContainerRef} 
                className={`skillscontainer ${skillsContainerVisible ? "visible" : ""}`}
            >
                <div className='skillsdescription'>
                {t("h6")}
                </div>
                <div className='skills'>
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className={`skill ${selectedSkill.name === skill.name ? 'selected' : ''}`} 
                            onMouseEnter={() => setSelectedSkill(skill)}
                            onClick={() => setSelectedSkill(skill)}
                        >
                            <img src={skill.img} alt={skill.name} />
                            <div>{skill.name}</div>
                        </div>
                    ))}
                </div>
                <div className='sdesc'>{selectedSkill.desc}</div>
            </div>
        </div>
    );
}

export default Home;
