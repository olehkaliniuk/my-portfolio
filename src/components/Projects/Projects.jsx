import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";
import { Project } from "../DataProjects/dataProjects";

function Projects() {
  const [sortBy, setSortBy] = useState(null);
  const filteredProjects = sortBy
    ? Project.filter((project) => project.sort === sortBy)
    : Project;

  const contactsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const cellsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    );

    if (contactsRef.current) {
      observer.observe(contactsRef.current);
    }

    return () => {
      if (contactsRef.current) {
        observer.unobserve(contactsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateBlurEffect = () => {
      const centerY = window.innerHeight / 2;

      cellsRef.current.forEach((cell) => {
        if (!cell) return;
        const rect = cell.getBoundingClientRect();
        const distanceToCenter = Math.abs(rect.top + rect.height / 2 - centerY);
        const blurAmount = Math.min(10, distanceToCenter / 50);
        cell.style.filter = `blur(${blurAmount}px)`;
        cell.style.opacity = `${1 - blurAmount / 10}`;
      });
    };

    window.addEventListener("scroll", updateBlurEffect);
    updateBlurEffect(); 

    return () => window.removeEventListener("scroll", updateBlurEffect);
  }, [filteredProjects]);

  return (
    <div ref={contactsRef} className={`projectscontainer ${isVisible ? "visible" : ""}`}>
      <h2>My Projects</h2>
      <ul className="sortby">
        <li>
          <button className="sbtn" onClick={() => setSortBy(1)}>1</button>
        </li>
        <li>
          <button className="sbtn" onClick={() => setSortBy(2)}>2</button>
        </li>
        <li>
          <button className="sbtn" onClick={() => setSortBy(3)}>3</button>
        </li>
        <li>
          <button className="sbtn" onClick={() => setSortBy(null)}>All</button>
        </li>
      </ul>
      <div className="prodj">
        {filteredProjects.map(({ id, pName, pDescription, pImg }, index) => (
          <div className="cell" key={id} ref={(el) => (cellsRef.current[index] = el)}>
            <img src={pImg} alt="" className="pimg" />
            <div className="descn">
              <div>{pName}</div>
              <div>{pDescription}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
