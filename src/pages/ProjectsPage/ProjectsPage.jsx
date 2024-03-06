import React, { useEffect, useState } from "react";
import "./ProjectsPage.css";
import projectsData from "./../../jsons/projects.json";
import ProjectCard from "../../components/projectCard/projectCard";
import Filter from "../../components/Filter/Filter";
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language.context'

const ProjectsPage = () => {

    const { language } = useContext(LanguageContext)
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [textFilter, setTextFilter] = useState(""); // Nuevo estado para almacenar el filtro de texto

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
                    <ProjectCard key={project.id} project={project} index={index} visible={true} />
                ))}
        </div>
    );
};

export default ProjectsPage;
