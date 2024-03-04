import "./FormationPage.css"
import formationData from "./../../jsons/formation.json"
import FormationCard from "../../components/FormationCard/FormationCard"

const FormationPage = () => {

    return (
        <div className="FormationPage">
            {formationData.map((formation, index) => (
                <FormationCard key={index} formation={formation} index={index} visible={true} />
            ))}
        </div>
    )
}

export default FormationPage