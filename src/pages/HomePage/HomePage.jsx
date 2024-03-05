import "./HomePage.css"
import mi_cv from './../../assets/documents/mi_cv.pdf'
import ContactForm from "../../components/ContactForm/ContactForm"
import { useState } from "react"
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const HomePage = () => {

    const [isShowContact, setIsShowContact] = useState(false)
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 250) {
            setIsShowContact(true)
        }
        else {
            setIsShowContact(false)
        }

    })

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
            <motion.div className="contactFrame" animate={isShowContact ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }} >
                <ContactForm />
            </motion.div>
        </div>
    )
}

export default HomePage