import "./ContactForm.css"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language.context'

const ContactForm = () => {

    const { language } = useContext(LanguageContext)
    const [state, handleSubmit] = useForm("xdorydbr");
    if (state.succeeded) {
        return <p>{language === "spanish" ? "Gracias por contactar" : "Thank you for contact"}</p>;
    }

    return (
        <>
            {language === "english" && (
                <div className="contactForm">
                    <form onSubmit={handleSubmit}>
                        <label >Name*</label>
                        <input
                            placeholder='Enter your name'
                            id="name"
                            type="name"
                            name="name"
                        />

                        <label >Email*</label>
                        <input
                            placeholder='Enter your email'
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label >Message*</label>
                        <textarea
                            placeholder='Enter your message'
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>
            )}
            {language === "spanish" && (
                <div className="contactForm">
                    <form onSubmit={handleSubmit}>
                        <label >Nombre completo*</label>
                        <input
                            placeholder='Introduce tu nombre completo...'
                            id="name"
                            type="name"
                            name="name"
                        />

                        <label >Email*</label>
                        <input
                            placeholder='Introduce tu email...'
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label >Mensaje*</label>
                        <textarea
                            placeholder='Introduce tu mensaje...'
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Enviar
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default ContactForm