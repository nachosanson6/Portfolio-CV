import "./HomePage.css"
import mi_cv from './../../assets/documents/mi_cv.pdf'
import my_cv from './../../assets/documents/my_cv.pdf'
import ContactForm from "../../components/ContactForm/ContactForm"
import { useState } from "react"
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language.context'

const HomePage = () => {

    const { language } = useContext(LanguageContext)
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
                    <h1>{language === "spanish" ? "Hola, soy Nacho" : "Hi, I'm Nacho"}</h1>
                    <h2>{language === "spanish" ? "Desarrollador web Full-Stack y DevOps" : "A full-Stack Developer and DevOps"}</h2>
                    {/* Botón para dispositivos de escritorio y tablet */}
                    {language === "spanish" ? (
                        <a href={mi_cv} download="Ignacio Sansón_CV.pdf">
                            <button className="desktop-tablet-button mt-3">Descargar CV</button>
                        </a>
                    )
                        :

                        <a href={my_cv} download="Ignacio Sansón_CV.pdf">
                            <button className="desktop-tablet-button mt-3">Download CV</button>
                        </a>
                    }
                </div>
                <img src="/assets/images/Profile_Photo.png" alt="" />
                {/* Botón para dispositivos móviles */}
                {language === "spanish" ? (
                    <a href={mi_cv} download="Ignacio Sansón_CV.pdf">
                        <button className="mobile-button mt-3">Degargar CV</button>
                    </a>
                )
                    :

                    <a href={my_cv} download="Ignacio Sansón_CV.pdf">
                        <button className="mobile-button mt-3">Download CV</button>
                    </a>
                }
            </div>
            <motion.div className="contactFrame" animate={isShowContact ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }} >
                <ContactForm />
            </motion.div>
        </div>
    )
}

export default HomePage