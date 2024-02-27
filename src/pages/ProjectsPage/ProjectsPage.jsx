import React from "react"
import "./ProjectsPage.css"
import projectsData from "./../../jsons/projects.json"


const ProjectsPage = () => {
    return (
        <div className="projectsPage">
            {projectsData.map(project => (
                <div key={project.id}>
                    <h2>{project.id} {project.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default ProjectsPage