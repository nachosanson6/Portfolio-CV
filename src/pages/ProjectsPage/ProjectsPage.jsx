// ProjectsPage.js
import React, { useState } from "react";
import "./ProjectsPage.css";
import projectsData from "./../../jsons/projects.json";
import ProjectCard from "../../components/projectCard/projectCard";
import Filter from "../../components/Filter/Filter";

const ProjectsPage = () => {

    const [selectedSkills, setSelectedSkills] = useState([]);

    const handleSkillToggle = (skillName) => {
        if (selectedSkills.includes(skillName)) {
            setSelectedSkills(selectedSkills.filter(skill => skill !== skillName));
        } else {
            setSelectedSkills([...selectedSkills, skillName]);
        }
    };

    const isProjectVisible = (project) => {
        if (selectedSkills.length === 0) return true; // Si no se ha seleccionado ninguna habilidad, mostrar todos los proyectos
        return selectedSkills.every(skill => project.skills.includes(skill));
    };


    return (
        <div className="projectsPage">
            <Filter onSkillToggle={handleSkillToggle} />
            {projectsData
                .filter(isProjectVisible)
                .map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} visible={true} />
                ))}
        </div>
    );
};

export default ProjectsPage;
