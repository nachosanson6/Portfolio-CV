// ProjectsPage.js
import React from "react";
import "./ProjectsPage.css";
import projectsData from "./../../jsons/projects.json";
import ProjectCard from "../../components/projectCard/projectCard";

const ProjectsPage = () => {
    return (
        <div className="projectsPage">
            {projectsData.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} visible={true} />
            ))}
        </div>
    );
};

export default ProjectsPage;
