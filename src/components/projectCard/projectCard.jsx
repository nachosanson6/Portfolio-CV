import "./projectCard.css"


const ProjectCard = ({ project }) => {
    return (
        <div className="projectCard">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
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
                        <button>
                            GitHub
                        </button>
                    </a>
                    <a href={project.web_link} target="_blank" rel="noopener noreferrer">
                        <button>
                            Web
                        </button>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default ProjectCard