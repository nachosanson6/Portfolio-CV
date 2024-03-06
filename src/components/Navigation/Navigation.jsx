import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CiLinkedin } from "react-icons/ci";
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language.context'
import ContactModal from "../ContactModal/ContactModal";

const Navigation = () => {

    const { language, setLanguage } = useContext(LanguageContext)
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleLinkClick = () => {
        setExpanded(false);
    };

    const openModal = () => {
        setOpen(true)
    }

    return (
        <Navbar expand="lg" expanded={expanded} onToggle={handleToggle}>
            <div className="navigation">
                <div className="links">
                    <div className="navbar-brand">
                        <img src="/assets/images/logo.png" width="80.382px" height="70px" alt="Logo" />
                    </div>

                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="pages">
                        <Nav className="mr-auto">
                            <NavLink to={"/"} className="nav-link" activeClassName="active" onClick={handleLinkClick}>{language === "spanish" ? "Inicio" : "Home"}</NavLink>
                            <NavLink to={"/projects"} className="nav-link" activeClassName="active" onClick={handleLinkClick}>{language === "spanish" ? "Proyectos" : "Projects"}</NavLink>
                            <NavLink to={"/experience"} className="nav-link" activeClassName="active" onClick={handleLinkClick}>{language === "spanish" ? "Experiencia" : "Experience"}</NavLink>
                            <NavLink to={"/formation"} className="nav-link" activeClassName="active" onClick={handleLinkClick}>{language === "spanish" ? "Estudios" : "Formation"}</NavLink>
                            <NavLink to={"/about"} className="nav-link" activeClassName="active" onClick={handleLinkClick}>{language === "spanish" ? "Sobre Mi" : "About Me"}</NavLink>
                        </Nav>
                    </div>
                    <div className="options">
                        <div className="navbar-social">
                            <a href="https://github.com/nachosanson6" target="_blank" rel="noopener noreferrer">
                                <IconContext.Provider value={{ size: "2.5rem", className: "global-class-name" }}>
                                    <FaGithub />
                                </IconContext.Provider>
                            </a>
                            <a href="https://www.linkedin.com/in/ignacio-sanson/" target="_blank" rel="noopener noreferrer">
                                <IconContext.Provider value={{ size: "2.8rem", className: "global-class-name" }}>
                                    <CiLinkedin className="logo" />
                                </IconContext.Provider>
                            </a>

                            <div className="navbar-language">
                                {language === "english" && (
                                    <button className="image-button" onClick={() => setLanguage("spanish")}>
                                        <img className="language_logo" src="/assets/images/spanish_logo.png" alt="" />
                                    </button>
                                )}
                                {language === "spanish" && (
                                    <button className="image-button" onClick={() => setLanguage("english")}>
                                        <img className="language_logo" src="/assets/images/english_logo.png" alt="" />
                                    </button>
                                )}

                            </div>
                        </div>
                        <div className="navbar-contact">
                            <a onClick={openModal}>
                                <button>{language === "spanish" ? "Contacto" : "Contact"}</button>
                            </a>
                        </div>
                    </div>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" gb="light" className="custom-toggler" />
            </div>
            <ContactModal open={open} setOpen={setOpen} />
        </Navbar>
    );
};

export default Navigation;
