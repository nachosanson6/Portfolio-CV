import "./HomePage.css"
import mi_cv from './../../assets/documents/mi_cv.pdf'
import ContactForm from "../../components/ContactForm/ContactForm"

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="homeInfo">
                <div className="presentation">
                    <h1>Hola, soy Nacho</h1>
                    <h2>Desarrollador web Full-Stack y DevOps</h2>
                    {/* Botón para dispositivos de escritorio y tablet */}
                    <a href={mi_cv} download="Ignacio Sansón CV.pdf">
                        <button className="desktop-tablet-button mt-3">Descargar CV</button>
                    </a>
                </div>
                <img src="/assets/images/Profile_Photo.png" alt="" />
                {/* Botón para dispositivos móviles */}
                <a href={mi_cv} download="Ignacio Sansón_CV.pdf">
                    <button className="mobile-button mt-3">Descargar CV</button>
                </a>
            </div>
            <ContactForm />

        </div>
    )
}

export default HomePage