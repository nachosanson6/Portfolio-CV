import React from "react"
import Skills from "../../components/Skills/Skills"
import "./ProjectsPage.css"



const ProjectsPage = () => {
    return (
        <div className="projectsPage">
            {/* {proyectsData.map(project => (
                <div key={project.id}>
                    <h2>{project.id} {project.title}</h2>
                </div>
            ))} */}
            <Skills />
        </div>
    )
}

export default ProjectsPage