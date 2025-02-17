import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";
import { Project } from "../DataProjects/dataProjects";
import "../../ i18n.js";
import { useTranslation } from "react-i18next";

function Projects() {


  const { t, i18n } = useTranslation();


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
      { threshold: 0.01, rootMargin: "0px 0px -10% 0px" }
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
      let closestElement = null;
      let minDistance = Infinity;

      cellsRef.current.forEach((cell) => {
        if (!cell) return;
        const rect = cell.getBoundingClientRect();
        const distanceToCenter = Math.abs(rect.top + rect.height / 2 - centerY);
        
        if (distanceToCenter < minDistance) {
          minDistance = distanceToCenter;
          closestElement = cell;
        }
      });

      cellsRef.current.forEach((cell) => {
        if (!cell) return;
        if (cell === closestElement) {
          cell.style.filter = "blur(0px)";
          cell.style.opacity = "1";
        } else {
          const rect = cell.getBoundingClientRect();
          const distanceToCenter = Math.abs(rect.top + rect.height / 2 - centerY);
          const blurAmount = Math.min(10, distanceToCenter / 50);
          cell.style.filter = `blur(${blurAmount}px)`;
          cell.style.opacity = `${1 - blurAmount / 10}`;
        }
      });
    };

    window.addEventListener("scroll", updateBlurEffect);
    updateBlurEffect();

    return () => window.removeEventListener("scroll", updateBlurEffect);
  }, [filteredProjects]);






  return (
    <div ref={contactsRef} className={`projectscontainer ${isVisible ? "visible" : ""}`}>
      <h2>{t("p1")}</h2>
      <div className="btncont">
      <div className="tec1">{t("p2")}</div>
      <ul className="sortby">
        <li>
          <button className="sbtn" onClick={() => setSortBy(1)}>Node.js</button>
        </li>
        <li>
          <button className="sbtn" onClick={() => setSortBy(2)}>PHP</button>
        </li>
        <li>
          <button className="sbtn" onClick={() => setSortBy(3)}>React</button>
        </li>
        <li>
          <button className="sbtn" onClick={() => setSortBy(null)}>All</button>
        </li>
      </ul>
      </div>
      <div className="prodj">
        {filteredProjects.map(({ id, pName,pStack, pDescription, pImg, gitLink }, index) => (
          <div className="cell" key={id} ref={(el) => (cellsRef.current[index] = el)}>
            <video src={pImg} alt="" className="pimg" autoPlay loop   />
            <div className="descn">
              <h3>{pName}</h3>
              <div className="tec">{t("p3")} <span>{pStack}</span></div>
              <div className="tec">{t(`${pDescription}`)}</div>
              <button> <a href={gitLink} target="_blank">GitHubLink</a></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
