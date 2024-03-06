import { createContext, useState } from "react";

const LanguageContext = createContext()

function LanguageProviderWrapper(props) {

    const [language, setLanguage] = useState('english')

    return (

        <LanguageContext.Provider value={{ language, setLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export { LanguageContext, LanguageProviderWrapper }