import "./ExperiencePage.css"
import experienceData from "./../../jsons/experience.json"
import ExperienceCard from "./../../components/ExperienceCard/ExperienceCard"

const ExperiencePage = () => {
    return (
        <div className="experience_page">
            {experienceData.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} index={index} visible={true} />
            ))}
        </div>
    )
}

export default ExperiencePage