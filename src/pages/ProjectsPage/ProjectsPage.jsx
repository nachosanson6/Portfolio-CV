import React, { useEffect, useState } from "react";
import "./ProjectsPage.css";
import projectsData from "./../../jsons/projects.json";
import ProjectCard from "../../components/projectCard/projectCard";
import Filter from "../../components/Filter/Filter";
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const ProjectsPage = () => {

    const [selectedSkills, setSelectedSkills] = useState([]);
    const [textFilter, setTextFilter] = useState(""); // Nuevo estado para almacenar el filtro de texto
    const [nextProjectIndex, setNextProjectIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;

            let nextIndex = nextProjectIndex;
            while (nextIndex < projectsData.length) {
                const element = document.getElementById(`project-${nextIndex}`);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.bottom <= windowHeight) {
                        nextIndex++;
                    } else {
                        break;
                    }
                } else {
                    break;
                }
            }
            setNextProjectIndex(nextIndex);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [nextProjectIndex]);


    const handleSkillToggle = (skillName) => {
        if (selectedSkills.includes(skillName)) {
            setSelectedSkills(selectedSkills.filter(skill => skill !== skillName));
        } else {
            setSelectedSkills([...selectedSkills, skillName]);
        }
    };

    const handleTextFilterChange = (text) => {
        setTextFilter(text);
    };

    const isProjectVisible = (project) => {
        // Verifica si el proyecto coincide con las habilidades seleccionadas
        const skillsMatch = selectedSkills.length === 0 || selectedSkills.every(skill => project.skills.includes(skill));

        // Verifica si el nombre del proyecto está definido y contiene el texto del filtro
        const textMatch = textFilter === '' || (project.title && project.title.toLowerCase().includes(textFilter.toLowerCase()));

        // El proyecto es visible si coincide tanto con las habilidades seleccionadas como con el filtro de texto
        return skillsMatch && textMatch;
    };


    return (
        <div className="projectsPage">
            <Filter onSkillToggle={handleSkillToggle} onTextFilterChange={handleTextFilterChange} />
            {projectsData
                .filter(isProjectVisible)
                .map((project, index) => (
                    <motion.div
                        key={project.id}
                        id={`project-${index}`} // Agregar un ID único a cada tarjeta de proyecto
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: isProjectVisible(index) ? "block" : "none" }} // Controlar la visibilidad de la tarjeta de proyecto
                    >
                        <ProjectCard key={project.id} project={project} index={index} visible={true} />
                    </motion.div>
                ))}
        </div>
    );
};

export default ProjectsPage;







const handleSkillToggle = (skillName) => {
    if (selectedSkills.includes(skillName)) {
        setSelectedSkills(selectedSkills.filter(skill => skill !== skillName));
    } else {
        setSelectedSkills([...selectedSkills, skillName]);
    }
};

const handleTextFilterChange = (text) => {
    setTextFilter(text);
};
