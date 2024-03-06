import skillsData from "./../../jsons/skills.json"
import "./Skills.css"
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language.context'

const Skills = () => {

    const { language } = useContext(LanguageContext)

    return (
        <div className="skills">
            <div className="skillsTitle">
                <h2>{language === "spanish" ? "Habilidades" : "Skills"}</h2>
            </div>
            <div className="skillsCards">
                {skillsData.map(skill => (
                    <div className="skillsCard" key={skill.id}>
                        <div className="skillImageFrame">
                            <img className="skillsImages" src={`/assets/images/${skill.logoImage}`} alt={skill.name} />
                        </div>
                        <div className="skills_name">
                            <h3>{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills