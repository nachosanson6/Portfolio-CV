import AboutMe from "../../components/AboutMe/AboutMe"
import Skills from "../../components/Skills/Skills"
import SoftSkills from "../../components/SoftSkills/SoftSkills"
import "./AboutPage.css"
const AboutPage = () => {
    return (
        <div className="aboutPage">
            <AboutMe />
            <div className="skillsFrame">
                <Skills />
                <SoftSkills />
            </div>
        </div>
    )
}

export default AboutPage