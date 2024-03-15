import "./FormationCard.css"
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language.context'

const FormationCard = ({ formation, index, visible }) => {

    const { language } = useContext(LanguageContext)


    return (
        <div className={`formationCard ${visible ? 'visible' : ''} slide-in-${index % 2 === 0 ? 'right' : 'left'}`}>
            <h2>{language === "spanish" ? formation.titulation : formation.titulation_en}</h2>
            <h3>{formation.starting_date} - {formation.finishing_date}</h3>
            <h3>{language === "spanish" ? formation.titulation_type : formation.titulation_type_en}</h3>
            <h3>{formation.institution}</h3>
        </div>
    )
}

export default FormationCard