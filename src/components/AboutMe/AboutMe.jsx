import './AboutMe.css'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language.context'

const AboutMe = () => {

    const { language } = useContext(LanguageContext)

    return (
        <>
            <div className="aboutMe">
                <h2 className="presentation" >{language === "spanish" ? "Sobre Mi" : "About Me"}</h2>
                {language === "english" ? (
                    <p className="text " >I am a full-stack web developer with a degree from the Ironhack Spain web developer bootcamp.
                        I am characterized by my passion, the dedication I put into everything I set out to do, consistency, organization, and the desire to learn and improve every day.

                        My goal is to be part of a team with the same passion that promotes good development practices, where I can contribute and learn from them every day.
                        <br />
                        During my time in the industry, I have had the opportunity to work on both individual and group projects, which has allowed me to gain experience in both front-end and back-end development. I have developed teamwork skills as well as some leadership skills. My communication and teaching abilities also stand out due to my previous role as a primary school teacher.</p>
                )
                    :
                    (
                        <p className="text " >Soy un desarrollador web full-stack  y DevOps titulado por Ironhack España.
                            Me caracterizo por mi pasión, la dedicación que pongo en todo lo que me propongo, la consistencia, la organización y el deseo de aprender y mejorar cada día.

                            Mi objetivo es ser parte de un equipo con la misma pasión que promueva buenas prácticas de desarrollo, donde pueda contribuir y aprender de ellos cada día.
                            <br />
                            Durante mi tiempo en la industria, he tenido la oportunidad de trabajar en proyectos individuales y en grupo, lo que me ha permitido adquirir experiencia tanto en el desarrollo front-end como en el back-end,
                            desarrollando así habilidades de trabajo en equipo y algunas habilidades de liderazgo.
                            Mis habilidades de comunicación y enseñanza también destacan debido a mi anterior puesto como maestro de educación primaria.</p>
                    )}
            </div>

        </>
    )
}
export default AboutMe