import "./ExperienceCard.css"
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language.context'

const ExperienceCard = ({ experience, index, visible }) => {

    const { language } = useContext(LanguageContext)

    return (
        <div className={`experienceCard ${visible ? 'visible' : ''} slide-in-${index % 2 === 0 ? 'right' : 'left'}`}>
            <h2>{language === "spanish" ? experience.position : experience.position_en}</h2>
            <h3>{experience.starting_date} - {experience.finishing_date}</h3>
            <h3>{language === "spanish" ? experience.company : experience.company_en}</h3>
        </div>
    )
}

export default ExperienceCard