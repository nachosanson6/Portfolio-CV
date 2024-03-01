import { useRef, useState, useEffect } from "react";
import "./projectCard.css";

const ProjectCard = ({ project }) => {
    const [showButton, setShowButton] = useState(false); // Nuevo estado para controlar la visibilidad del botón
    const [showDescription, setShowDescription] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        // Verificar si hay overflow en la descripción
        if (descriptionRef.current && descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight) {
            setShowButton(true); // Mostrar el botón si hay overflow
        } else {
            setShowButton(false); // Ocultar el botón si no hay overflow
        }
    }, [project]); // Volvemos a verificar cada vez que cambia el proyecto

    const showProjectDescription = () => {
        setShowDescription(prevState => !prevState);
    }

    const rotateArrow = () => {
        setShowDescription(prevState => !prevState); // Alternar el estado de mostrar descripción
    };

    return (
        <div className="projectCard">
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
        </div >
    )
}

export default ProjectCard;
