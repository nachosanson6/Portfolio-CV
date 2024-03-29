import React, { useState, useEffect, useRef } from "react";
import "./projectCard.css";
import Carousel from "../Carousel/Carousel";
import { MdOutlineWebAsset } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language.context'
import MovileCarousel from "../MovileCarousel/MovileCarousel";

const ProjectCard = ({ project, index, visible }) => {

    const { language } = useContext(LanguageContext)
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
                <p>{language === "spanish" ? project.description : project.description_en}</p>
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
                        <button>GitHub <FaSquareGithub /></button>
                    </a>
                    {project.web_link !== "" &&
                        <a href={project.web_link} target="_blank" rel="noopener noreferrer">
                            <button>Web <MdOutlineWebAsset /></button>
                        </a>
                    }
                </div>
            </div>
            <div className="carousel_frame">
                {project.tablet_image ? (
                    <Carousel mobile_photo={project.movile_image} tablet_photo={project.tablet_image} desktop_photo={project.desktop_image} />
                ) : (
                    project.movile_image2 ? (
                        <MovileCarousel mobile_photo={project.movile_image} mobile_photo2={project.movile_image2} mobile_photo3={project.movile_image3} />
                    ) : (
                        <img className="desktop_image" src={`assets/images/project_images/${project.desktop_image}`} alt="Proyecto" />
                    ))}
            </div>
        </div>
    );
};

export default ProjectCard;
