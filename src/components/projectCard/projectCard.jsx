import React, { useState, useEffect, useRef } from "react";
import "./projectCard.css";

const ProjectCard = ({ project, index, visible }) => {
    const [showButton, setShowButton] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const descriptionRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        if (descriptionRef.current && descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }, [project]);

    const rotateArrow = () => {
        setShowDescription(prevState => !prevState);
    };

    return (
        <div className={`projectCard ${visible ? 'visible' : ''} slide-in-${index % 2 === 0 ? 'right' : 'left'}`} ref={cardRef}>
            <h2>{project.title}</h2>
            <div className={`projectDescription ${showDescription ? 'show' : ''}`} ref={descriptionRef}>
                <p>{project.description}</p>
            </div>
            {showButton && (
                <div className="arrowButtonFrame">
                    <button className={`arrowButton ${showDescription ? 'rotated' : ''}`} onClick={rotateArrow}>
                        <img src="/assets/images/arrow.svg" alt="Ver más" />
                    </button>
                </div>
            )}
            <div className="frame">
                <div className="skillsList">
                    {project.skills.map(skill => (
                        <div className="skillsElements" key={`${project.title}_${skill}`}>
                            <img src={`/assets/images/logo${skill}.png`} alt="" />
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                        <button>GitHub</button>
                    </a>
                    <a href={project.web_link} target="_blank" rel="noopener noreferrer">
                        <button>Web</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
