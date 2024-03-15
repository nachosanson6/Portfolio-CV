import skillsData from "./../../jsons/soft_skills.json"
import "./SoftSkills.css"
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language.context'

const SoftSkills = () => {

    const { language } = useContext(LanguageContext)

    return (
        <div className="skills">
            <div className="skillsTitle">
                <h2>{language === "spanish" ? "Habilidades Blandas" : " Soft Skills"}</h2>
            </div>
            <div className="skillsCards">
                {skillsData.map(skill => (
                    <div className="softskillsCard" key={skill.id}>
                        <div className="skillImageFrame">
                            <img className="skillsImages" src={`/assets/images/${skill.logoImage}`} alt={skill.name} />
                        </div>
                        <div className="skills_name">
                            <h3>{language === "spanish" ? skill.name : skill.name_en}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SoftSkills