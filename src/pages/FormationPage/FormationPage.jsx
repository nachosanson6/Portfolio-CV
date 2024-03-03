import "./FormationPage.css"
import formationData from "./../../jsons/formation.json"
import FormationCard from "../../components/FormationCard/FormationCard"

const FormationPage = () => {

    console.log(formationData)
    return (
        <div className="FormationPage">
            {formationData.map((formation, index) => (
                <FormationCard key={formation.id} formation={formation} index={index} visible={true} />
            ))}
        </div>
    )
}

export default FormationPage