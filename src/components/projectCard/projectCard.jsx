import "./projectCard.css"


const ProjectCard = ({ project }) => {
    console.log(project)
    return (
        <div className="projectCard">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.skills.map(skill => (
                <img src={`/assets/images/logo${skill}.png`} alt="" />
            ))}
        </div>
    )
}

export default ProjectCard