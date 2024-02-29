import React from "react"
import "./ProjectsPage.css"
import projectsData from "./../../jsons/projects.json"
import ProjectCard from "../../components/projectCard/projectCard"




const ProjectsPage = () => {
    return (
        <div className="projectsPage">
            {projectsData.map(project => (
                <div className="" key={project.id}>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    )
}

export default ProjectsPage