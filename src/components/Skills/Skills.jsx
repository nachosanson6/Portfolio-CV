import skillsData from "./../../jsons/skills.json"
import "./Skills.css"

const Skills = () => {
    return (
        <div className="skills">
            {skillsData.map(skill => (
                <div key={skill.id}>
                    <h2>{skill.name}</h2>
                    <img src={`/assets/${skill.logoImage}`} alt={skill.name} />
                </div>
            ))}
        </div>
    )
}

export default Skills