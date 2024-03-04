import "./FormationCard.css"

const FormationCard = ({ formation, index, visible }) => {


    return (
        <div className={`formationCard ${visible ? 'visible' : ''} slide-in-${index % 2 === 0 ? 'right' : 'left'}`}>
            <h2>{formation.titulation}</h2>
            <h3>{formation.starting_date} - {formation.finishing_date}</h3>
            <h3>{formation.titulation_type}</h3>
            <h3>{formation.institution}</h3>
        </div>
    )
}

export default FormationCard