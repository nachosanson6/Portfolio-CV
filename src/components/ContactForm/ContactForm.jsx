import "./ContactForm.css"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {

    const [state, handleSubmit] = useForm("xdorydbr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
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
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactForm