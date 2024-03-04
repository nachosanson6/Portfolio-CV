import "./ExperienceCard.css"

const ExperienceCard = ({ experience, index, visible }) => {


    return (
        <div className={`experienceCard ${visible ? 'visible' : ''} slide-in-${index % 2 === 0 ? 'right' : 'left'}`}>
            <h2>{experience.position}</h2>
            <h3>{experience.starting_date} - {experience.finishing_date}</h3>
            <h3>{experience.company}</h3>
        </div>
    )
}

export default ExperienceCard