import skillsData from "./../../jsons/skills.json"
import "./Skills.css"

const Skills = () => {
    return (
        <div className="skills">
            <div className="skillsTitle">
                <h2>Habilidades</h2>
            </div>
            <div className="skillsCards">
                {skillsData.map(skill => (
                    <div className="skillsCard" key={skill.id}>
                        <img className="skillsImages" src={`/assets/images/${skill.logoImage}`} alt={skill.name} />
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills